import { connect } from "react-redux";
import TaskList from "../components/TasksList";
import { actionCreators } from "../actions";

const mapState = ({ tasks }) => {
  const tasksGroup = tasks;
  return {
    tasksGroup
  };
};

const mapDispatch = dispatch => {
  return {
  };
};

const Container = connect(
  mapState,
  mapDispatch
)(TaskList);

export default Container;
