import {pick} from 'utils/collection'

describe('collection', () => {
  it('should pick', () => {
    expect(pick({a: 1, b: 2, c: 3}, 'a', 'b')).toEqual({a: 1, b: 2})
    expect(pick({}, 'a', 'b')).toEqual({})
  })
})