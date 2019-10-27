import React from "react";
import { Button } from "antd";
const { Group } = Button;

const styleControlButton = {
    fontSize: 25
};

const Buttons = ({ status, actions }) => (
  <div>
    {
      status === 0
      ?
      <Button
        size="large"
        style={styleControlButton}
        type="primary"
        icon="play-circle"
        onClick={actions.start}
      >
      Start
      </Button>
      :
      <Group>
        <Button
          size="large"
          style={styleControlButton}
          icon="pause-circle"
        />
        <Button
          size="large"
          style={styleControlButton}
          icon="stop"
          onClick={actions.stop}
        />
        <Button
          size="large"
          style={styleControlButton}
          icon="undo"
        />
      </Group>
    }
  </div>
);

export default Buttons;
