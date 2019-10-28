import React from "react";
import { Statistic } from "antd";
import { msToTime } from './helpers';
const { Countdown } = Statistic;

const CountDown = ({ item, finish }) => {
  const { status, deadline, runningTask } = item;
  const now = Date.now();
  const remaining = deadline - now;
  const pauseTime = status === 2 ? msToTime(remaining) : "00:00:00";
  return (
    <div>
      {status === 1 && (
        <Countdown
          title={runningTask.description}
          value={deadline}
          onFinish={finish}
        />
      )}
      {status === 2 && (
        <Statistic
          title={runningTask.description}
          value={pauseTime}
        />
      )}
    </div>
  );
};

export default CountDown;
