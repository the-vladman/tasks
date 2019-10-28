import React from "react";
import { Statistic } from "antd";
const { Countdown } = Statistic;

const msToTime = duration => {
  let seconds = parseInt((duration / 1000) % 60);
  let minutes = parseInt((duration / (1000 * 60)) % 60);
  let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};

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
