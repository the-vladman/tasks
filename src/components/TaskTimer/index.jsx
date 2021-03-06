import React, { Component } from "react";
import { Row, Col } from "antd";
import Countdown from "./TimerCountdown";
import Buttons from "./TimerButtons";
import { multi, convert, msToTime } from './helpers';

class TaskTimer extends Component {
  
  startTimer() {
    const { nextTask, start } = this.props;
    if (nextTask) {
      const deadline = convert(nextTask.estimated_duration);
      start(nextTask, deadline);
    }
  }

  stopTimer() {
    const { timer, stop } = this.props;
    if (timer.runningTask) {
      stop(timer.runningTask);
    }
  }

  pauseTimer() {
    const { timer, pause } = this.props;
    const { runningTask, deadline } = timer;
    const now = Date.now();
    const remaining = deadline - now;
    const elapsed = multi * runningTask.estimated_duration - remaining;
    pause(elapsed);
  }

  resumeTimer() {
    const { timer, reset } = this.props;
    const { runningTask, elapsed } = timer;
    const deadline = convert(runningTask.estimated_duration) - elapsed;
    reset(deadline);
  }

  resetTimer() {
    const { timer, reset } = this.props;
    const deadline = convert(timer.runningTask.estimated_duration);
    reset(deadline);
  }

  setCompleted(){
    const { timer, setCompleted } = this.props;
    const { runningTask, deadline } = timer;
    const now = Date.now();
    const remaining = deadline - now;
    const duration = multi * runningTask.estimated_duration - remaining;
    setCompleted(runningTask.id, msToTime(duration))
  }

  onFinish() {
    const { nextTask, start, stop } = this.props;
    this.setCompleted();
    if (nextTask) {
      const deadline = convert(nextTask.estimated_duration);
      start(nextTask, deadline);
    } else {
      stop();
    }
  }

  render() {
    const { timer, canStart } = this.props;
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={12}>
            <Countdown item={timer} finish={() => this.onFinish()} />
          </Col>
          <Col span={12}>
            <Buttons
              status={timer.status}
              canStart={canStart}
              actions={{
                start: () => this.startTimer(),
                pause: () => this.pauseTimer(),
                resume: () => this.resumeTimer(),
                completed: () => this.onFinish(),
                stop: () => this.stopTimer(),
                reset: () => this.resetTimer()
              }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default TaskTimer;
