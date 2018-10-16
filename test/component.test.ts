import Component, {scopedClasses} from '../lib/component';

describe('Component', () => {
  it('exist', () => {
    expect(Component).toBeTruthy()
  });
  describe('scopedClass', () => {
    it('string', () => {
      const context = {constructor: {name: 'button'}}
      expect(scopedClasses.call(context, 'a')).toBe('gu-button-a')
      expect(scopedClasses.call(context, 'a', 'b')).toBe('gu-button-a gu-button-b')
      expect(scopedClasses.call(context, ['a', 'b'])).toBe('gu-button-a gu-button-b')
      expect(scopedClasses.call(context, {a: true, b: true})).toBe('gu-button-a gu-button-b')
      expect(scopedClasses.call(context, {a: true, b: false})).toBe('gu-button-a')
      expect(scopedClasses.call(context)).toBe('gu-button')
    });
  });
})
