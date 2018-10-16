import Component, {scopedClass} from '../lib/component';

describe('Component', () => {
  it('exist', () => {
    expect(Component).toBeTruthy()
  });
  describe('scopedClass', () => {
    it('string', () => {
      const context = {constructor: {name: 'button'}}
      expect(scopedClass.call(context, 'a')).toBe('gu-button-a')
      expect(scopedClass.call(context, 'a', 'b')).toBe('gu-button-a gu-button-b')
      expect(scopedClass.call(context, ['a', 'b'])).toBe('gu-button-a gu-button-b')
      expect(scopedClass.call(context, {a: true, b: true})).toBe('gu-button-a gu-button-b')
      expect(scopedClass.call(context, {a: true, b: false})).toBe('gu-button-a')
      expect(scopedClass.call(context)).toBe('gu-button')
    });
  });
})
