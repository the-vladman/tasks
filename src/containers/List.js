import { connect } from "react-redux";
import TaskList from "../components/TasksList";
import { actionCreators } from "../actions";

const mapState = ({ tasks }) => {
  const tasksGroup = tasks;
  return {
    tasks
  };
};

const mapDispatch = dispatch => {
  return {
    remove: (id) => dispatch(actionCreators.removeTask(id)),
    setEditable: (id) => dispatch(actionCreators.editableTask(id)),
    edit: (t) => dispatch(actionCreators.editTask(t)),
  };
};

const Container = connect(
  mapState,
  mapDispatch
)(TaskList);

export default Container;
