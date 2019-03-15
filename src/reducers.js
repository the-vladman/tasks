import { types }from './actions'

const initialState = {
  tasks: [],
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
            editable: false,
            completed: false
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
            task.editable = true
          }
          return task
        }),
      }


    default:
      return state
  }
}

export default tasksApp
