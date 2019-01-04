export default function callNew(Cls: any, args: any) {
  const F = Cls.bind.apply(Cls, [Cls, ...args]);
  return new F();
}
