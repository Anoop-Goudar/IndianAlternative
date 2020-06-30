/**
 *
 * Ina
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectIna from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Ina() {
  useInjectReducer({ key: 'ina', reducer });
  useInjectSaga({ key: 'ina', saga });

  return (
    <div>
      <Helmet>
        <title>Ina</title>
        <meta name="description" content="Description of Ina" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Ina.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ina: makeSelectIna(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Ina);
