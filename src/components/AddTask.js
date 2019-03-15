import React, { Component } from 'react';
import { Input, Button, Select, } from 'antd';
import { connect } from 'react-redux'
import { actionCreators } from '../actions'

const InputGroup = Input.Group;
const { Option } = Select;


class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: 's',
    };
  }

  emitEmpty = () => {
    this.titleInput.focus();
    this.setState({ title: '' });
  }

  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  }

  selectInitial = () => {
    this.typeSelect.focus();
    this.setState({ type: 's' });
  }

  onChangeType = (e) => {
    this.setState({ type: e });
  }

  render() {
    const { title, type } = this.state;
    return (
      <div className="AddTask">
        <div style={{ marginBottom: 16 }}>
          <InputGroup compact>
            <Input ref={node => this.titleInput = node } onChange={this.onChangeTitle} value={title} style={{ width: '70%' }} placeholder="Agrega una tarea"  />
            <Select
              value={type}
              ref={node => this.typeSelect = node }
              onChange={this.onChangeType}
              style={{ width: '30%' }}
              defaultValue="s">
              <Option value="s">Corta</Option>
              <Option value="m">Media</Option>
              <Option value="l">Larga</Option>
            </Select>
          </InputGroup>
        </div>
        <Button type="primary" onClick={ () => this.addTitle() }>Agregar tarea</Button>
      </div>
    );
  }

  addTitle = async () => {
    const { title, type } = this.state
    const { dispatch } = this.props
    const task = { title, type }
    await dispatch(actionCreators.addTask(task))
    this.emitEmpty()
    this.selectInitial()
  }
}

export default connect()(AddTask);
