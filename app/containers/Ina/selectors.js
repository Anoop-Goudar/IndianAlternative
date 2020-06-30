import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ina state domain
 */

const selectInaDomain = state => state.ina || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Ina
 */

const makeSelectIna = () =>
  createSelector(
    selectInaDomain,
    substate => substate,
  );

export default makeSelectIna;
export { selectInaDomain };
