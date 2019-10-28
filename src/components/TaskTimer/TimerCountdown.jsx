import React from "react";
import { Statistic } from "antd";
const { Countdown } = Statistic;

const CountDown = ({ item, finish }) => {
  const { status, deadline, runningTask } = item;
  return (
    <div>
      {status === 1 && (
        <Countdown title={runningTask.description} value={deadline} onFinish={finish} />
      )}
    </div>
  );
};

export default CountDown;
