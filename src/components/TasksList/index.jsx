import React from "react";
import { Timeline } from "antd";
import TaskItem from "../TaskItem";

const TasksList = ({ tasks, remove, setEditable, edit }) => (
  <Timeline>
    {
      tasks.length > 0
      ?
      tasks.map(item => (
        <Timeline.Item key={item.id} color={item.status === 1 ? 'green' : 'blue' }>
          <TaskItem task={item} actions={{ remove, setEditable, edit }} />
        </Timeline.Item>
      ))
      :
      null
    }
  </Timeline>
);

export default TasksList;