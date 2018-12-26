import {camelToKebab, kebabToCamel, lowerFirstLetter, upperFirstLetter, plural} from 'utils/namer';

describe('Namer', () => {
  it('has 4 functions', () => {
    expect(camelToKebab).toBeInstanceOf(Function);
    expect(kebabToCamel).toBeInstanceOf(Function);
    expect(lowerFirstLetter).toBeInstanceOf(Function);
    expect(upperFirstLetter).toBeInstanceOf(Function);
    expect(plural).toBeInstanceOf(Function);
  });
  it('converts camel to kebab', () => {
    expect(camelToKebab('')).toEqual('');
    expect(camelToKebab('hello')).toEqual('hello');
    expect(camelToKebab('helloWorld')).toEqual('hello-world');
    expect(camelToKebab('HelloWorld')).toEqual('hello-world');
    expect(camelToKebab('hello-world')).toEqual('hello-world');
  });
  it('converts kebab to camel', () => {
    expect(kebabToCamel('')).toEqual('');
    expect(kebabToCamel('hello')).toEqual('hello');
    expect(kebabToCamel('hello-world')).toEqual('helloWorld');
    expect(kebabToCamel('hello-World')).toEqual('helloWorld');
    expect(kebabToCamel('Hello-World')).toEqual('HelloWorld');
  });
  it('lower the first letter', () => {
    expect(lowerFirstLetter('')).toEqual('');
    expect(lowerFirstLetter('hello')).toEqual('hello');
    expect(lowerFirstLetter('Hello')).toEqual('hello');
    expect(lowerFirstLetter('HelloWorld')).toEqual('helloWorld');
  });
  it('upper the first letter', () => {
    expect(upperFirstLetter('')).toEqual('');
    expect(upperFirstLetter('hello')).toEqual('Hello');
    expect(upperFirstLetter('Hello')).toEqual('Hello');
    expect(upperFirstLetter('helloWorld')).toEqual('HelloWorld');
  });
  it('gets plural', () => {
    expect(plural('apple')).toEqual('apples');
    expect(plural('person')).toEqual('people');
    expect(plural('quiz')).toEqual('quizzes');
  });
});