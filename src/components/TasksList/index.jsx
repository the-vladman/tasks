import React from "react";
import { Timeline } from "antd";
import TaskItem from "../TaskItem";

const TasksList = ({ tasks }) => (
  <Timeline>
    {tasks.map(item => (
      <Timeline.Item>
        <TaskItem task={item} />
      </Timeline.Item>
    ))}
  </Timeline>
);

export default TasksList;