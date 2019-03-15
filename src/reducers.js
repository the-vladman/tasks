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
          {
            id: action.id,
            title: action.title,
            type: action.typeTask,
            description: action.description,
            status: 0,
          }
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
            task.status = 1
          }
          return task
        }),
      }

      case types.EDIT_TASK:
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if (task.id === action.id) {
              task.type = action.typeTask
              task.description = action.description
              task.status = 0
            }
            return task
          }),
        }

    case types.RUNNING_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.id) {
            task.status = 2
          }
          return task
        }),
      }

    case types.STOP_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.id) {
            task.status = 0
          }
          return task
        }),
      }

    default:
      return state
  }
}

export default tasksApp
