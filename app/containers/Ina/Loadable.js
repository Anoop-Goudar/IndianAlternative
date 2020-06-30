/**
 *
 * Asynchronously loads the component for Ina
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
