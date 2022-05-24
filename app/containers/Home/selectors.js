import { createSelector } from 'reselect';
import { INITIAL_STATE } from './reducer';

/**
 * Direct selector to the home state domain
 */
const selectHomeDomain = state => state.home || INITIAL_STATE;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const makeSelectHome = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.toJS(),
  );

export default makeSelectHome;
export { selectHomeDomain };
