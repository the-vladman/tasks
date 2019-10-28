import React from "react";
import EditTask from '../AddTask';

const TaskItem = ({ task, actions }) => {
  return (
      <EditTask task={task} edit={ task => actions.edit(task) } />
  );
};

export default TaskItem;
