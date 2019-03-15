import React from 'react';
import { List, Icon, Tag, Input, Select, Button, } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

const TaskItem = ({ deleteTask, editableTask, editTask, task }) => {
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

  const onChangeType = (e) => {
    task.type = e
  }

  const onChangeDescription = (e) => {
    task.description = e.target.value
  }

  const type = task.editable
              ?
              <Select defaultValue={task.type} onChange={onChangeType}>
                <Option value="s">Corta</Option>
                <Option value="m">Media</Option>
                <Option value="l">Larga</Option>
              </Select>
              : <Tag color={typeColor}>{typeText}</Tag>

  const actions = task.editable
                ? [<Button type="primary" ghost onClick={ () => editTask(task) }>Guardar</Button>]
                : [<Button type="primary" ghost onClick={editableTask}>editar</Button>, <Icon onClick={deleteTask} type="close"/>]

  const description = task.editable
                    ? <TextArea rows={2} onChange={onChangeDescription} defaultValue={task.description} />
                    : task.description

  return(
  <List.Item actions={actions}>
    <List.Item.Meta
      avatar={type}
      title={<a>{task.title}</a>}
      description={description}
    />
  </List.Item>
)}

export default TaskItem;
