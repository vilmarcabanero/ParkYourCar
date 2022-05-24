import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

/**
 * Direct selector to the park state domain
 */
const selectParkDomain = state => state.park || INITIAL_STATE;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Park
 */

const makeSelectPark = () =>
  createSelector(
    selectParkDomain,
    substate => substate.toJS(),
  );

export default makeSelectPark;
export { selectParkDomain };
