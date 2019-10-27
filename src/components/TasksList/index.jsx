import React from "react";
import { Timeline } from "antd";
import TaskItem from "../TaskItem";

const TasksList = ({ tasks, remove, setEditable, edit }) => (
  <Timeline>
    {tasks.map(item => (
      <Timeline.Item key={item.id}>
        <TaskItem task={item} actions={{ remove, setEditable, edit }} />
      </Timeline.Item>
    ))}
  </Timeline>
);

export default TasksList;