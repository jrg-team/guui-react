import Component, {scopedClasses} from '../../lib/component';

xdescribe('Component', () => {
  it('exist', () => {
    expect(Component).toBeTruthy()
  });
  describe('scopedClass', () => {
    it('string', () => {
      const context = {constructor: {name: 'CollapseItem'}}
      expect(scopedClasses.call(context, 'a')).toBe('gu-collapseItem-a')
      expect(scopedClasses.call(context, 'a', 'b')).toBe('gu-collapseItem-a gu-collapseItem-b')
      expect(scopedClasses.call(context, ['a', 'b'])).toBe('gu-collapseItem-a gu-collapseItem-b')
      expect(scopedClasses.call(context, {a: true, b: true})).toBe('gu-collapseItem-a gu-collapseItem-b')
      expect(scopedClasses.call(context, {a: true, b: false})).toBe('gu-collapseItem-a')
      expect(scopedClasses.call(context)).toBe('gu-collapseItem')
      expect(scopedClasses.call(context, '', {active: true}, ['hover']))
        .toBe('gu-collapseItem gu-collapseItem-active gu-collapseItem-hover')
    });
  });
})
