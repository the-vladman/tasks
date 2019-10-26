import React from 'react';
import { List, } from 'antd';
import TaskItem from '../TaskItem';

const TasksList = ({ tasks }) => (
  <List
    size="large"
    bordered
    dataSource={tasks}
    renderItem={item => (<TaskItem task={item} />)}
  />
);

export default TasksList;