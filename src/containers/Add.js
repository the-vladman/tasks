import { connect } from "react-redux";
import AddTask from "../components/AddTask";
import { actionCreators } from "../actions";

const mapState = state => {
  return {
  };
};

const mapDispatch = dispatch => {
  return {
  };
};

const Container = connect(
  mapState,
  mapDispatch
)(AddTask);

export default Container;
