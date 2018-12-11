import {classes, createScopedClasses} from 'utils/classes';

describe('classes', () => {
  it('is a function', () => {
    expect(classes).toBeInstanceOf(Function);
  });
  it('generate class names', () => {
    expect(classes()).toEqual('');
    expect(classes('a')).toEqual('a');
    expect(classes(['a', 'b'])).toEqual('a b');
    expect(classes('a', 'b')).toEqual('a b');
    expect(classes({a: false, b: true})).toEqual('b');
    expect(classes({a: true, b: true})).toEqual('a b');
    expect(classes({a: true, b: true}, 'c', ['d', 'e'])).toEqual('a b c d e');
    expect(classes({a: true, b: true}, 'c', ['a', 'b'])).toEqual('a b c');
  });
  it('generate scoped class names', () => {
    const sc = createScopedClasses('test');
    expect(sc()).toEqual('gu-test');
    expect(sc('')).toEqual('gu-test');
    expect(sc('', 'active')).toEqual('gu-test gu-test-active');
    expect(sc('', ['active'])).toEqual('gu-test gu-test-active');
    expect(sc('', {active: true})).toEqual('gu-test gu-test-active');
    expect(sc('', 'active', 'red')).toEqual('gu-test gu-test-active gu-test-red');
    expect(sc('', ['active', 'red'])).toEqual('gu-test gu-test-active gu-test-red');
    expect(sc('', {active: true, red: true})).toEqual('gu-test gu-test-active gu-test-red');
    expect(sc('a', 'b', 'a')).toEqual('gu-test-a gu-test-b');
  });
});