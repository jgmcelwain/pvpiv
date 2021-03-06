import React, { FunctionComponent, ReactChild, useState, useMemo } from 'react';

import { League, LevelCap } from '../../data/reference';

import { Context } from '.';

export const Provider: FunctionComponent<{
  league: League;
  children: ReactChild | ReactChild[];
}> = ({ league, children }) => {
  const [inspectedLevelCap, setInspectedLevelCap] = useState<LevelCap>(null);
  const displayMode = useMemo(
    () => (inspectedLevelCap !== null ? 'top' : 'subject'),
    [inspectedLevelCap],
  );

  return (
    <Context.Provider
      value={{
        league,
        displayMode,
        inspectedLevelCap,
        setDisplayMode: (mode, levelCap) => {
          setInspectedLevelCap(mode === 'subject' ? null : levelCap);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
