import React from 'react';
import { List, Icon, Tag } from 'antd';

const TaskItem = ({ onClick, task }) => {
  let typeColor = ''
  let typeText = ''
  switch (task.type) {
    case 's':
      typeColor = 'green'
      typeText = 'Corta'
      break;
    case 'm':
      typeColor = 'yellow'
      typeText = 'Media'
      break;
    case 'l':
      typeColor = 'red'
      typeText = 'Larga'
      break;
    case 'p':
      typeColor = 'blue'
      typeText = 'Personalizada'
      break;
    default:
      typeColor = 'green'
      typeText = 'Corta'
  }
  return(
  <List.Item actions={[<Icon onClick={onClick} type="close"/>]}>
    <List.Item.Meta
      avatar={<Tag color={typeColor}>{typeText}</Tag>}
      title={<a>{task.title}</a>}
      description={task.description}
    />
  </List.Item>
)}

export default TaskItem;
