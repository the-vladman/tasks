import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../actions'
import { List, } from 'antd';
import AddTask from './AddTask'
import TaskItem from './TaskItem'

class TasksList extends Component {
  render() {
    const { tasks } = this.props
    const { dispatch } = this.props
    return (
      <List
        size="large"
        header={<AddTask />}
        footer={<div>Footer</div>}
        bordered
        dataSource={tasks}
        renderItem={item => (<TaskItem task={item} onClick={() => dispatch(actionCreators.removeTask(item.id)) } />)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
})

export default connect(mapStateToProps)(TasksList)
