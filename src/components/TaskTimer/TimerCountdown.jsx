import React from "react";
import { Statistic, Typography } from "antd";
import { msToTime } from './helpers';
const { Paragraph } = Typography;
const { Countdown } = Statistic;

const CountDown = ({ item, finish }) => {
  const { status, deadline, runningTask } = item;
  const now = Date.now();
  const remaining = deadline - now;
  const pauseTime = status === 2 ? msToTime(remaining) : "00:00:00";
  const styles = { color: 'white' };
  return (
    <div>
      {status === 1 && (
        <Countdown
          valueStyle={styles}
          title={<Paragraph style={styles}>{runningTask.description}</Paragraph>}
          value={deadline}
          onFinish={finish}
        />
      )}
      {status === 2 && (
        <Statistic
          valueStyle={styles}
          title={<Paragraph style={styles}>{runningTask.description}</Paragraph>}
          value={pauseTime}
        />
      )}
    </div>
  );
};

export default CountDown;
