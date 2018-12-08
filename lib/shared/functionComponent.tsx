// import {default as React, ComponentType, createContext} from 'react';
//
// export interface IBaseProps {
//   sc: (this: any, ...args: ClassValue[]) => string
// }
//
// function FC<Props>(displayName: string, Component: ComponentType<Props & IBaseProps>): ComponentType<Props> {
//   Component.displayName = displayName;
//   return (props: Props) => {
//     return (
//       <Component {...props} sc={sc.bind(Component)}/>
//     );
//   };
// }
//
// export {FC, sc};
