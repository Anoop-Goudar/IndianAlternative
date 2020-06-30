import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the indianAlternative state domain
 */

const selectIndianAlternativeDomain = state =>
  state.indianAlternative || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by IndianAlternative
 */

const makeSelectIndianAlternative = () =>
  createSelector(
    selectIndianAlternativeDomain,
    substate => substate,
  );

export default makeSelectIndianAlternative;
export { selectIndianAlternativeDomain };
