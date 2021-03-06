import React, { FunctionComponent } from 'react';

import { LEAGUES, LEVEL_CAPS, OUTPUT_DATA } from '../data/reference';

import { useSettings, SettingsActionTypes } from '../hooks/useSettings';
import { useSettingsShown } from '../hooks/useSettingsShown';

import SettingsWrapper from './SettingsWrapper';
import SettingsSection from './SettingsSection';
import SettingsSectionCategory from './SettingsSectionCategory';
import SettingsSectionCategoryInput from './SettingsSectionCategoryInput';

const Settings: FunctionComponent = () => {
  const { settings, dispatch } = useSettings();
  const { isShown, hide } = useSettingsShown();

  return (
    <SettingsWrapper onClose={hide} shown={isShown}>
      <SettingsSection title='Calculation'>
        <SettingsSectionCategory description='Leagues for which rank data should be calculated for.'>
          {LEAGUES.map((league) => (
            <SettingsSectionCategoryInput
              key={league.key}
              onInput={(value) =>
                dispatch({
                  type: SettingsActionTypes.League,
                  payload: { key: league.key, value },
                })
              }
              value={settings.leagues[league.key]}
              label={league.name}
            />
          ))}
        </SettingsSectionCategory>

        <SettingsSectionCategory description='Level caps for which rank data should be calculated for.'>
          {LEVEL_CAPS.map((levelCap) => (
            <SettingsSectionCategoryInput
              key={levelCap.level}
              onInput={(value) =>
                dispatch({
                  type: SettingsActionTypes.LevelCap,
                  payload: { key: levelCap.level, value },
                })
              }
              value={settings.levelCaps[levelCap.level]}
              label={levelCap.name}
            />
          ))}
        </SettingsSectionCategory>
      </SettingsSection>

      <SettingsSection title='Output'>
        <SettingsSectionCategory description='Selected fields will be displayed in the subject calculation output.'>
          {OUTPUT_DATA.map((dataPoint) => (
            <SettingsSectionCategoryInput
              key={dataPoint.key}
              onInput={(value) =>
                dispatch({
                  type: SettingsActionTypes.OutputData,
                  payload: { key: dataPoint.key, value },
                })
              }
              value={settings.outputData[dataPoint.key]}
              label={dataPoint.name}
            />
          ))}
        </SettingsSectionCategory>
      </SettingsSection>

      <SettingsSection title='Data'>
        <SettingsSectionCategory description='Toggle available data sources.'>
          <SettingsSectionCategoryInput
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.Speculative,
                payload: value,
              })
            }
            value={settings.showSpeculative}
            label='Speculative Pokemon (unreleased Mega Evolutions)'
          />
        </SettingsSectionCategory>
      </SettingsSection>
    </SettingsWrapper>
  );
};

export default Settings;
