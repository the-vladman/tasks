import React, { Component } from "react";
import { Row, Col } from "antd";
import Countdown from "./TimerCountdown";
import Buttons from "./TimerButtons";

class TaskTimer extends Component {
  // convert ms to seconds
  multi = 1000 * 60;
  convert = value => Date.now() + this.multi * value;

  startTimer() {
    const { nextTask, start } = this.props;
    if (nextTask) {
      const deadline = this.convert(nextTask.estimated_duration);
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
    const elapsed = this.multi * runningTask.estimated_duration - remaining;
    pause(elapsed);
  }

  resumeTimer() {
    const { timer, reset } = this.props;
    const { runningTask, elapsed } = timer;
    const deadline = this.convert(runningTask.estimated_duration) - elapsed;
    reset(deadline);
  }

  resetTimer() {
    const { timer, reset } = this.props;
    const deadline = this.convert(timer.runningTask.estimated_duration);
    reset(deadline);
  }

  onFinish() {
    const { nextTask, start, stop } = this.props;
    if (nextTask) {
      const deadline = this.convert(nextTask.estimated_duration);
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
          <Col span={16}>
            <Countdown item={timer} finish={() => this.onFinish()} />
          </Col>
          <Col span={8}>
            <Buttons
              status={timer.status}
              canStart={canStart}
              actions={{
                start: () => this.startTimer(),
                pause: () => this.pauseTimer(),
                resume: () => this.resumeTimer(),
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
