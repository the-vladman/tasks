import React, { Component } from 'react';
import './App.css';
import {  Row, Col, Layout, } from 'antd';
import { Add, List, Timer } from './containers';
const { Header, Content } = Layout

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header/>
          <Content style={{ padding: 24, margin: 0, minHeight: '100vh', }}>
            <Row type="flex" justify="center">
              <Col span={12}>
                <Add />
              </Col>
            </Row>
            <Row type="flex" justify="center" style={{ marginTop: 24 }}>
              <Col span={12}>
                <List />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
