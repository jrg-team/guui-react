declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.md' {
  const content: any;
  export default content;
}

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
  [K in Keys]-?: Required<Pick<T, K>>
}[Keys]

type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
  [K in Keys]-?:
  Required<Pick<T, K>>
  & Partial<Record<Exclude<Keys, K>, undefined>>
}[Keys]

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
