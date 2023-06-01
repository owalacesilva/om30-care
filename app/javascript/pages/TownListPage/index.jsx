/**
 *
 * TownListPage
 *
 */

import React, { useEffect } from 'react';
import { getTownListAction } from './actions';
/* import Header from '../components/Header'; */
/* import TownList from '../components/TownList'; */
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import TownModal from '../../components/TownModal';

const TownListPage = ({
  isLoading,
  errorMessage,
  townList,
  getTownList,
}) => {
  useEffect(() => {
    getTownList();
  }, []);

  return <>
    { /* Town list */ }
    <Row>
      {townList.map((town, index) => (
        <Col key={index} span={12}>
          <span>{town.display_name}</span>
        </Col>
      ))}
      <TownModal
        onAfterClose={() => getTownList()}
        />
    </Row>
  </>
}

TownListPage.propTypes = {};

const mapStateToProps = ({ townListPageReducer } /* state */) => ({
  isLoading: townListPageReducer.isLoading,
  errorMessage: townListPageReducer.errorMessage,
  townList: townListPageReducer.townList,
});
const mapDispatchToProps = dispatch => ({
  getTownList: () => dispatch(getTownListAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TownListPage);