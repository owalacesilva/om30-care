/**
 *
 * TownListPage
 *
 */

import React from 'react';
/* import Header from '../components/Header'; */
/* import TownList from '../components/TownList'; */
import { Layout, Row, Col, Input, Button, List, Form, Icon } from 'antd';

const { Header: AntHeader } = Layout;

class TownListPage extends React.Component {

  render() {
    return <>
      { /* Town list */ }
      <Row>
        <Col span={12}></Col>
        <Col span={12}></Col>
      </Row>    
    </>

  };
}

TownListPage.propTypes = {};

export default TownListPage;