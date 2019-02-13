export default function debounce(fn: () => void, delay: number) {
  let id: number | undefined;
  return () => {
    if (id !== undefined) {window.clearTimeout(id);}
    id = window.setTimeout(fn, delay);
  };
}