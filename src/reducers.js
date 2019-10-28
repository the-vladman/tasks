import { types }from './actions'

const initialState = {
  tasks: [
    /* TASK STATUS
      0 = PENDING
      1 = COMPLETED
      -1 = ON TIMER
    */
  ],
  filter: null,
  timer: {
    /*
    0 = STOP
    1 = RUNNING
    2 = PAUSE
    */
    status: 0,
    // if pause, set the elapsed value on ms
    elapsed: null
  }
};

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


    case types.SELECT_FILTER:
      return {
        ...state,
        filter: action.value
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

      case types.COMPLETED_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.id) {
            task.status = 1;
            task.completed_duration = action.time;
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

    case types.START_TIMER:
      return {
        ...state,
        timer: {
          runningTask: action.task,
          deadline: action.deadline,
          status: 1,
        },
        tasks: state.tasks.map(task => {
          if (task.id === action.task.id) {
            task.status = -1;
          }
          return task
        }),
      }

      case types.PAUSE_TIMER:
        return {
          ...state,
          timer: {
            ...state.timer,
            status: 2,
            elapsed: action.elapsed
          },
        }

    case types.RESET_TIMER:
      return {
        ...state,
        timer: {
          ...state.timer,
          deadline: action.time,
          status: 1,
          elapsed: null
        },
      }

    case types.STOP_TIMER:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (action.task && task.id === action.task.id) {
            task.status = 0;
          }
          return task
        }),
        timer: {
          ...initialState.timer
        }
      }

    default:
      return state
  }
}

export default tasksApp
