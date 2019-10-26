import React, { Component } from 'react';
import { Statistic, Button, Row, Col, } from 'antd';
const Countdown = Statistic.Countdown;

class TaskTimer extends Component {

  startTimer() {
    const { tasks } = this.props
    const firstTask = tasks[0]
    let timeCount = null
    switch (firstTask.type) {
      case 's':
        timeCount = Date.now() + 1000 * 60 * 30
        break;
      case 'm':
        timeCount = Date.now() + 1000 * 60 * 60
        break;
      case 'l':
        timeCount = Date.now() + 1000 * 60 * 120
        break;
      default:
        timeCount = Date.now() + 1000 * 60 * 30
    }
    console.log('START');
    
  }

  stopTimer() {
    console.log('STOP');
  }

  onFinish() {
    console.log('finished!');
  }

  render() {
    const deadline = Date.now() + 1000 * 60 * 3;
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={16}>
            { deadline
              ?
              <Button type="primary" onClick={this.stopTimer} icon='stop'>Parar</Button>
              :
              <Button type="primary" onClick={this.startTimer} icon='play-circle'>Empezar</Button>
            }
          </Col>
          <Col span={6}>
            { deadline ? <Countdown title="Challenge" value={deadline} onFinish={this.onFinish} /> : null }
          </Col>
        </Row>
      </div>
    );
  }
}

export default TaskTimer;
