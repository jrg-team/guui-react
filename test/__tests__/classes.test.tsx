import classes, {scopedClasses} from '../../lib/shared/classes';

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
    const context = {constructor: {name: 'test'}, scopedClasses};
    expect(context.scopedClasses()).toEqual('gu-test');
    expect(context.scopedClasses('')).toEqual('gu-test');
    expect(context.scopedClasses('', 'active')).toEqual('gu-test gu-test-active');
    expect(context.scopedClasses('', ['active'])).toEqual('gu-test gu-test-active');
    expect(context.scopedClasses('', {active: true})).toEqual('gu-test gu-test-active');
    expect(context.scopedClasses('', 'active', 'red')).toEqual('gu-test gu-test-active gu-test-red');
    expect(context.scopedClasses('', ['active', 'red'])).toEqual('gu-test gu-test-active gu-test-red');
    expect(context.scopedClasses('', {active: true, red: true})).toEqual('gu-test gu-test-active gu-test-red');
    expect(context.scopedClasses('a', 'b', 'a')).toEqual('gu-test-a gu-test-b');
  });
});