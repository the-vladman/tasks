import React, { Component } from 'react';
import './App.css';
import TasksList from './components/TasksList'
import {  Row, Col, Layout, } from 'antd';
const { Header, Content } = Layout

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header/>
          <Content style={{ padding: 24, margin: 0, minHeight: 800, }}>
            <Row type="flex" justify="center">
              <Col span={10}>
                <TasksList />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
