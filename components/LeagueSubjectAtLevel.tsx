import React, { FunctionComponent, useContext, useMemo } from 'react';

import { getRankedSpreadColors } from '../utils/getRankColors';

import { Context as SubjectContext } from './SubjectContext';
import { Context as SettingsContext } from './SettingsContext';
import { Context as LeagueContext } from './LeagueContext';
import { Context as LeagueSubjectSpreadsContext } from './LeagueSubjectSpreadsContext';

import { IV_FLOORS, LevelCap } from '../data/reference';

import * as LeagueTableCells from './LeagueTableCells';

const LeagueSubjectAtLevel: FunctionComponent<{ levelCap: LevelCap }> = ({
  levelCap,
}) => {
  const { league, setDisplayMode } = useContext(LeagueContext);
  const { subject } = useContext(SubjectContext);
  const { settings } = useContext(SettingsContext);
  const leagueRankedSubjectSpreads = useContext(LeagueSubjectSpreadsContext);

  const result = useMemo(
    () =>
      leagueRankedSubjectSpreads[levelCap.level].find(
        (spread) =>
          spread.ivs.atk === subject.ivs.atk &&
          spread.ivs.def === subject.ivs.def &&
          spread.ivs.sta === subject.ivs.sta,
      ),
    [leagueRankedSubjectSpreads[levelCap.level], subject.ivs],
  );

  const floor = useMemo(
    () => IV_FLOORS.find((ivFloor) => ivFloor.value === subject.floor),
    [subject.floor],
  );

  const colors = useMemo(() => getRankedSpreadColors(result), [result]);

  if (subject === null) return null;

  return (
    <tr className={`${colors.background} ${colors.text}`}>
      {settings.outputData.rank && (
        <LeagueTableCells.Body>{result.rank}</LeagueTableCells.Body>
      )}

      {settings.outputData.level && (
        <LeagueTableCells.Body>
          <>
            {result.level}
            <span className='text-xs'> / {levelCap.level}</span>
          </>
        </LeagueTableCells.Body>
      )}

      {settings.outputData.cp && (
        <LeagueTableCells.Body>{result.cp}</LeagueTableCells.Body>
      )}

      {settings.outputData.stats && (
        <LeagueTableCells.Body>
          <>
            {result.stats.atk.toFixed(2)}
            <span className='transform scale-75 inline-block mx-1 font-semibold'>
              {' '}
              /{' '}
            </span>
            {result.stats.def.toFixed(2)}
            <span className='transform scale-75 inline-block mx-1 font-semibold'>
              {' '}
              /{' '}
            </span>
            {result.stats.sta}
          </>
        </LeagueTableCells.Body>
      )}

      {settings.outputData.statProduct && (
        <LeagueTableCells.Body>
          <span title={`${result.product}`}>
            {(result.product / 1000).toFixed(2)}
          </span>
        </LeagueTableCells.Body>
      )}

      {settings.outputData.statProductPercent && (
        <LeagueTableCells.Body>
          {(result.percent * 100).toFixed(2)}%
        </LeagueTableCells.Body>
      )}

      <LeagueTableCells.Body right>
        <button
          onClick={() => setDisplayMode('top', levelCap)}
          className='focus:ring-2 p-0.5 ring-blue-600 focus:outline-none rounded mr-2'
          title={`View top ${league.name} IV spreads for ${subject.species.name}, Level ${levelCap.level}, ${floor.name}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 10h16M4 14h16M4 18h16'
            />
          </svg>
        </button>
      </LeagueTableCells.Body>
    </tr>
  );
};

export default LeagueSubjectAtLevel;