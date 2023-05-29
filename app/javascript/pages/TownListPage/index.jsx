/**
 *
 * TownListPage
 *
 */

import React, { useEffect, useState } from 'react';
import { getTownList } from './actions';
/* import Header from '../components/Header'; */
/* import TownList from '../components/TownList'; */
import { Layout, Row, Col, Input, Button, List, Form, Icon } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { isArray } from '@rails/webpacker/package/utils/helpers';

const TownListPage = ({ townList, getTownList }) => {
  return <>
    { /* Town list */ }
    <Row>
      {townList.map((town, index) => (
        <Col key={index} span={12}>
          <span>{town.display_name}</span>
        </Col>
      ))}
      <Button onClick={() => alert('add')}>
        <span>Add</span>
      </Button>
    </Row>
  </>
}

TownListPage.propTypes = {};

const mapStateToPros = ({ townListPageReducer } /* state */) => ({
  townList: townListPageReducer.townList,
});

const mapDispatchToPros = dispatch => ({
  getTownList: dispatch(getTownList()),
})

export default connect(mapStateToPros, mapDispatchToPros)(TownListPage);