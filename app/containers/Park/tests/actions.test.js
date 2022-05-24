import Actions from '../actions';

describe('Park actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: Actions.Types.DEFAULT,
      };
      expect(Actions.Creators.default()).toEqual(expected);
    });
  });
});
