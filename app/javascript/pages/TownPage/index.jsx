/**
 *
 * TownPage
 *
 */

import React, { useEffect } from 'react';
/* import Header from '../components/Header'; */
/* import TownList from '../components/TownList'; */
import { connect } from 'react-redux';
import { getTownAction } from './actions';

const TownPage = ({
  isLoading,
  errorMessage,
  town,
  getTown,
  history,
}) => {
  useEffect(() => {
    const { location } = history;
    getTown(location.pathname.substring(1));
  }, [history]);

  return <>
    { /* Town page */ }
    <p>Hello São Paulo</p>
  </>
}

TownPage.propTypes = {};

const mapStateToProps = (townPageReducer /* state*/) => ({
  isLoading: townPageReducer.isLoading,
  errorMessage: townPageReducer.errorMessage,
  town: townPageReducer.townData,
});
const mapDispatchToProps = (dispatch) => ({
  getTown: (slug) => dispatch(getTownAction(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TownPage);