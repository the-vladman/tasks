import { types }from './actions'

const initialState = {
  tasks: [],
  timeToComplete: null,
}

const tasksApp = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.task
        ],
      }

    case types.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id),
      }

    case types.EDITABLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.id) {
            task.editable = true;
          }
          return task
        }),
      }

      case types.EDIT_TASK:
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if (task.id === action.id) {
              task.estimated_duration = action.estimated_duration;
              task.description = action.description;
              task.editable = false;
            }
            return task
          }),
        }

    case types.START_TASK:
      return {
        ...state,
        timer: {
          runningTask: action.task,
          deadline: Date.now() + 1000 * 60 * 3,
          status: 1,
        },
        tasks: state.tasks.filter(task => task.id !== action.task.id),
      }

    case types.STOP_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.task
        ],
        timer: {
          ...initialState.timer
        }
      }

    default:
      return state
  }
}

export default tasksApp
