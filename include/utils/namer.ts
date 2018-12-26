export function camelToKebab(camel: string) {
  let result = camel.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
  if (result.indexOf('-') === 0) {
    result = result.substring(1);
  }
  return result;
}

export function kebabToCamel(kebab: string) {
  return kebab.replace(/-(\w)/g, (match, c1) => c1.toUpperCase());
}

export function lowerFirstLetter(name: string) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

export function upperFirstLetter(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function plural(singular: string): string {
  const special: any = {
    quiz: 'quizzes',
    person: 'people'
  };
  return special[singular] || `${singular}s`;
}
