import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../actions'
import { List, } from 'antd';
import AddTask from './AddTask'
import TaskItem from './TaskItem'
import TaskTimer from './TaskTimer'

class TasksList extends Component {
  render() {
    const { tasks, dispatch } = this.props
    return (
      <List
        size="large"
        header={tasks.length > 0 ? <TaskTimer runningTask={(id) => dispatch(actionCreators.runningTask(id)) } stopTask={(id) => dispatch(actionCreators.stopTask(id)) }/> : null }
        footer={<AddTask />}
        bordered
        dataSource={tasks}
        renderItem={item => (<TaskItem task={item} deleteTask={() => dispatch(actionCreators.removeTask(item.id)) } editTask={(item) => dispatch(actionCreators.editTask(item)) } editableTask={() => dispatch(actionCreators.editableTask(item.id)) }/>)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
})

export default connect(mapStateToProps)(TasksList)
