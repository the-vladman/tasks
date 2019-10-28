import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row, Form, Input, Button, Select } from "antd";
import { DurationTypes } from "../Constants";
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
        <Form onSubmit={this.handleSubmit}>
          <Row gutter={16}>
            <Col span={14}>
              <Item hasFeedback>
                {getFieldDecorator("description", {
                  rules: [{ required: true, message: "Required!" }]
                })(<Input placeholder="Description Task" />)}
              </Item>
            </Col>
            <Col span={6}>
              <Item hasFeedback>
                {getFieldDecorator("estimated_duration", {
                  rules: [{ required: true, message: "Required!" }]
                })(
                  <Select placeholder="Choose estimated duration">
                    {DurationTypes.map(d => (
                      <Option
                        key={d.key}
                        value={d.timeValue}
                      >{`(${d.tag}) ${d.timeValue} min`}</Option>
                    ))}
                  </Select>
                )}
              </Item>
            </Col>
            <Col span={4}>
              <Item>
                <Button icon={iconButton} type="primary" htmlType="submit">
                  Task
                </Button>
              </Item>
            </Col>
          </Row>
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
