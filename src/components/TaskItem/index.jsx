import React from "react";
import {
  Card,
} from "antd";

import ReadOnly from './readOnly';
import Editable from './Editable';

const TaskItem = props => {
  const { task } = props;
  return (
    <Card size="small">
      {
        task.editable
        ?
        <Editable {...props} />
        :
        <ReadOnly {...props} />
      }
    </Card>
  );
};

export default TaskItem;
