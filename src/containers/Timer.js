import { connect } from "react-redux";
import TaskTimer from "../components/TaskTimer";
import { actionCreators } from "../actions";

const mapState = ({tasks, timer}) => {
  const todos = tasks.filter(t => t.status === 0);
  const nextTask = todos[0];
  return {
    nextTask,
    timer,
    canStart: todos.length > 0 ? true : false 
  };
};

const mapDispatch = dispatch => {
  return {
    start: (t, d) => dispatch(actionCreators.startTimer(t, d)),
    pause: (t) => dispatch(actionCreators.pauseTimer(t)),
    stop: (t) => dispatch(actionCreators.stopTimer(t)),
    reset: (t) => dispatch(actionCreators.resetTimer(t)),
  };
};

const Container = connect(
  mapState,
  mapDispatch
)(TaskTimer);

export default Container;
