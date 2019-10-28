export const types = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  EDITABLE_TASK: 'EDITABLE_TASK',
  COMPLETED_TASK: 'COMPLETED_TASK',
  EDIT_TASK: 'EDIT_TASK',
  START_TIMER: 'START_TIMER',
  PAUSE_TIMER: 'PAUSE_TIMER',
  RESET_TIMER: 'RESET_TIMER',
  STOP_TIMER: 'STOP_TIMER',
}

let idTask = 0

export const actionCreators = {
  // ADD TASK
  addTask: (newTask) => {
    return {
      type: types.ADD_TASK,
      task: { id: idTask++, ...newTask, editable: false, status: 0 }
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
  // COMPLETED TASK
  completedTask: (id, time) => {
    return {
      type: types.COMPLETED_TASK,
      id,
      time
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
  startTimer: (task, deadline) => {
    return {
      type: types.START_TIMER,
      task,
      deadline
    }
  },
  // PAUSE TASK TIMER
  pauseTimer: (elapsed) => {
    return {
      type: types.PAUSE_TIMER,
      elapsed,
    }
  },
  // STOP TASK TIMER
  stopTimer: (task) => {
    return {
      type: types.STOP_TIMER,
      task,
    }
  },
  // RESET TASK TIMER
  resetTimer: (time) => {
    return {
      type: types.RESET_TIMER,
      time,
    }
  },
}
