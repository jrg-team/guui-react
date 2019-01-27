import * as React from 'react';

export interface IMenuContext {
  selected?: string;
  setSelected: (selected: string) => void;
  unfold: (id: string) => void;
  fold: (id: string) => void;
  unfolded: string[];
  initFolding?: 'unfoldAll' | 'foldAll';
}

export const MenuContext = React.createContext({} as IMenuContext);
