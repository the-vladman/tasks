import { connect } from "react-redux";
import TaskTimer from "../components/TaskTimer";
import { actionCreators } from "../actions";

const mapState = ({tasks, timer}) => {
  const nextTask = tasks[0];
  return {
    nextTask,
    timer
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
