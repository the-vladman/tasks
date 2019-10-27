export const types = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  EDITABLE_TASK: 'EDITABLE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  START_TASK: 'START_TASK',
  STOP_TASK: 'STOP_TASK',
}

let idTask = 0

export const actionCreators = {
  // ADD TASK
  addTask: (newTask) => {
    return {
      type: types.ADD_TASK,
      task: { id: idTask++, ...newTask, editable: false }
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
      estimated_duration: task.estimated_duration,
      description: task.description,
    }
  },
  // START TASK TIMER
  startTask: (task) => {
    return {
      type: types.START_TASK,
      task,
    }
  },
  // STOP TASK
  stopTask: (task) => {
    return {
      type: types.STOP_TASK,
      task,
    }
  },
}
