import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Form, Input, Button, Select } from "antd";
const { Item } = Form;
const { Option } = Select;

const TaskForm = Form.create({
  name: "add-task"
})(
  class extends Component {
    handleSubmit = e => {
      e.preventDefault();
      const { form, add } = this.props;
      form.validateFields((err, values) => {
        if (!err) {
          add(values);
          form.resetFields();
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Item hasFeedback label="Task">
            {getFieldDecorator("description", {
              rules: [{ required: true, message: "Required!" }]
            })(<Input placeholder="Finish the test ..." />)}
          </Item>
          <Item hasFeedback label="Estimated duration">
            {getFieldDecorator("estimated_duration", {
              rules: [{ required: true, message: "Required!" }]
            })(
              <Select placeholder="Select duration" style={{ width: 150 }}>
                <Option value={30}>(Small) 30m</Option>
                <Option value={45}>(Medium) 45m</Option>
                <Option value={60}>(Large) 60m</Option>
              </Select>
            )}
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Add task
            </Button>
          </Item>
        </Form>
      );
    }
  }
);

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
}

export default TaskForm;
