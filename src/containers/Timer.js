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
    start: (t) => dispatch(actionCreators.startTask(t)),
    stop: (t) => dispatch(actionCreators.stopTask(t)),
  };
};

const Container = connect(
  mapState,
  mapDispatch
)(TaskTimer);

export default Container;
