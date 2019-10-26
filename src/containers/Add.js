import { connect } from "react-redux";
import AddTask from "../components/AddTask";
import { actionCreators } from "../actions";

const mapState = state => {
  return {
  };
};

const mapDispatch = dispatch => {
  return {
    add: (n) => dispatch(actionCreators.addTask(n)),
  };
};

const Container = connect(
  mapState,
  mapDispatch
)(AddTask);

export default Container;
