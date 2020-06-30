/**
 *
 * IndianAlternative
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
import makeSelectIndianAlternative from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Container, Row, Col } from 'react-grid-system';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export function IndianAlternative() {
  useInjectReducer({ key: 'indianAlternative', reducer });
  useInjectSaga({ key: 'indianAlternative', saga });
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const productList = [
    {
      name: 'ShareIt',
      origin: 'china',
      alternative: 'Files By Google'
    },
    {
      name: 'Helo',
      origin: 'china',
      alternative: 'ShareChat'
    },
    {
      name: 'CamScanner',
      origin: 'china',
      alternative: 'AdobeScanner, Microsoft Lens'
    },
    {
      name: 'UC Browser',
      origin: 'china',
      alternative: 'Google Browser'
    },
    {
      name: 'AppLock',
      origin: 'china',
      alternative: 'Norton App Lock'
    },
    {
      name: 'Pubg',
      origin: 'china',
      alternative: 'FortNite'
    },
    {
      name: 'TikTok',
      origin: 'china',
      alternative: 'Roposo,  Dubsmash, Funimate'
    },
    {
      name: 'Zoom',
      origin: 'china',
      alternative: 'Zoho Meeting, Google Hangouts,'
    },
    {
      name: 'Parallel Space',
      origin: 'china',
      alternative: 'App Cloner'
    },
    {
      name: 'ClubFactory',
      origin: 'china',
      alternative: 'Flipkart'
    },
  ];
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <title>IndianAlternative</title>
        <meta name="description" content="Description of IndianAlternative" />
      </Helmet>
      <FormattedMessage {...messages.header} />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product</StyledTableCell>
              <StyledTableCell align="right">Origin</StyledTableCell>
              <StyledTableCell align="right">Alternatives</StyledTableCell>
              <StyledTableCell align="right">Indian Alternative&nbsp;(g)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product) => (
              <StyledTableRow key={product.name}>
                <StyledTableCell component="th" scope="row">
                  {product.name}
                </StyledTableCell>
                <StyledTableCell align="right">{product.origin}</StyledTableCell>
                <StyledTableCell align="right">{product.alternative}</StyledTableCell>
                <StyledTableCell align="right">{product.ina}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

IndianAlternative.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  indianAlternative: makeSelectIndianAlternative(),
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
)(IndianAlternative);
