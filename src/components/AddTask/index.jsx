import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Select } from "antd";
const { Item } = Form;
const { Option } = Select;

const TaskForm = Form.create({
  name: "add-task",
  mapPropsToFields(props) {
    const { task } = props;
    const description = task
      ? Form.createFormField({
          value: task.description
        })
      : null;
    const estimated_duration = task
      ? Form.createFormField({
          value: task.estimated_duration
        })
      : null;
    return {
      description,
      estimated_duration
    };
  }
})(
  class extends Component {
    handleSubmit = e => {
      e.preventDefault();
      const { form, add, edit, task } = this.props;
      form.validateFields((err, values) => {
        if (!err) {
          if (edit) {
            edit({ id: task.id, ...values });
          } else {
            add(values);
            form.resetFields();
          }
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;
      const iconButton = this.props.edit ? "edit" : "plus";
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
            <Button icon={iconButton} type="primary" htmlType="submit">
              Task
            </Button>
          </Item>
        </Form>
      );
    }
  }
);

TaskForm.propTypes = {
  add: PropTypes.func,
  edit: PropTypes.func
};

export default TaskForm;
