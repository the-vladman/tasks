import React from "react";
import { Col, Row, Select } from "antd";
import { connect } from "react-redux";
import { actionCreators } from "../actions";
import { DurationTypes } from "../components/Constants";
const { Option } = Select;

const SelectFilter = ({ selectFilter }) => (
  <Row type="flex" justify="end" style={{ padding: 10 }}>
    <Col span={8}>
      <Select
        placeholder="Filter by"
        allowClear={true}
        style={{ width: 150 }}
        onChange={v => {
          selectFilter(v);
        }}
      >
        {DurationTypes.map(d => (
          <Option
            key={d.key}
            value={d.timeValue}
          >{`(${d.tag}) ${d.timeValue} min`}</Option>
        ))}
      </Select>
    </Col>
  </Row>
);

const mapDispatch = dispatch => {
  return {
    selectFilter: v => dispatch(actionCreators.selectFilter(v))
  };
};

const Container = connect(
  null,
  mapDispatch
)(SelectFilter);

export default Container;
