import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../actions'
import { Statistic, Button, Row, Col, } from 'antd';
const Countdown = Statistic.Countdown;

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: null,
    };
  }

  onFinish() {
    console.log('finished!');
  }

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
    this.props.runningTask(firstTask.id)
    this.setState({ deadline: timeCount });
  }

  stopTimer() {
    const { tasks } = this.props
    const firstTask = tasks[0]
    this.props.stopTask(firstTask.id)
    this.setState({ deadline: null });
  }

  render() {
    const { deadline, } = this.state;
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={16}>
            { deadline
              ?
              <Button type="primary" onClick={() => this.stopTimer()} icon='stop'>Parar</Button>
              :
              <Button type="primary" onClick={() => this.startTimer()} icon='play-circle'>Empezar</Button>
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

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  timeToComplete: state.timeToComplete,
})

export default connect(mapStateToProps)(TasksList)
