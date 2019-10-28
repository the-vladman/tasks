import React from "react";
import { Card, Typography, Icon, Menu, Dropdown } from "antd";
const { Title, Paragraph } = Typography;
const { Item } = Menu;

const TaskItem = ({ task, actions }) => {
  const menu = (
    <Menu>
      {task.status === 0 && (
        <Item
          style={{ color: "#08c" }}
          onClick={() => actions.setEditable(task.id)}
        >
          <Icon type="edit" />
          <span>Edit</span>
        </Item>
      )}
      <Item style={{ color: "red" }} onClick={() => actions.remove(task.id)}>
        <Icon type="close" />
        <span>Remove</span>
      </Item>
    </Menu>
  );

  const DropdownActions = (
    <div style={{ textAlign: "end", fontSize: 25 }}>
      <Dropdown overlay={menu}>
        <Icon type="more" />
      </Dropdown>
    </div>
  );

  const showTime = task.status === 1 ? task.completed_duration : task.estimated_duration;
  return (
    <Card.Meta
      description={
        <Paragraph style={{ fontSize: 20 }}>{task.description}</Paragraph>
      }
      avatar={<Title level={2}>{showTime}</Title>}
      title={DropdownActions}
    />
  );
};

export default TaskItem;
