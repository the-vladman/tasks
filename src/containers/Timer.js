import { connect } from "react-redux";
import TaskTimer from "../components/TaskTimer";
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
)(TaskTimer);

export default Container;
