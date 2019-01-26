import * as React from 'react';

export interface IMenuContext {
  selected?: string;
  setSelected: (selected: string) => void;
  unfolded?: string[];
  defaultFolding?: 'unfoldAll' | 'foldAll';
}

export const MenuContext = React.createContext({} as IMenuContext);
