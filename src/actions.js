export const types = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  EDITABLE_TASK: 'EDITABLE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  RUNNING_TASK: 'RUNNING_TASK',
  STOP_TASK: 'STOP_TASK',
}

let idTask = 0

export const actionCreators = {
  // ADD TASK
  addTask: (task) => {
    return {
      type: types.ADD_TASK,
      id: idTask++,
      title: task.title,
      typeTask: task.type,
      description: '',
    }
  },
  // REMOVE TASK
  removeTask: (id) => {
    return {
      type: types.REMOVE_TASK,
      id,
    }
  },
  // EDITABLE TASK
  editableTask: (id) => {
    return {
      type: types.EDITABLE_TASK,
      id,
    }
  },
  // EDIT TASK
  editTask: (task) => {
    return {
      type: types.EDIT_TASK,
      id: task.id,
      typeTask: task.type,
      description: task.description,
    }
  },
  // RUNNING TASK
  runningTask: (id) => {
    return {
      type: types.RUNNING_TASK,
      id,
    }
  },
  // STOP TASK
  stopTask: (id) => {
    return {
      type: types.STOP_TASK,
      id,
    }
  },
}
