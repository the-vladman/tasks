import React from "react";
import { Tabs, Icon } from "antd";
import { connect } from "react-redux";
import TaskList from "../components/TasksList";
import { actionCreators } from "../actions";
import Filter from './Filter';
const { TabPane } = Tabs;

const TabPanel = ({ todos, completed, edit, remove, setEditable }) => {
  const actions = { edit, remove, setEditable };
  return (
    <Tabs defaultActiveKey="1" style={{ textAlign: "center", fontSize: 30 }}>
      <TabPane
        tab={
          <span>
            <Icon type="bars" />
            To do
          </span>
        }
        key="1"
      >
        <Filter />
        <TaskList tasks={todos} {...actions} />
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="history" />
            Completed
          </span>
        }
        key="2"
      >
        <TaskList tasks={completed} {...actions} />
      </TabPane>
    </Tabs>
  );
};

const mapState = ({ tasks }) => {
  const todos = tasks.filter(t => t.status === 0);
  const completed = tasks.filter(t => t.status === 1);
  return {
    todos,
    completed
  };
};

const mapDispatch = dispatch => {
  return {
    remove: id => dispatch(actionCreators.removeTask(id)),
    setEditable: id => dispatch(actionCreators.editableTask(id)),
    edit: t => dispatch(actionCreators.editTask(t))
  };
};

const Container = connect(
  mapState,
  mapDispatch
)(TabPanel);

export default Container;
