import React from "react";
import { Button } from "antd";
const { Group } = Button;

const styleControlButton = {
  fontSize: 25
};

const Buttons = ({ status, actions, canStart }) => (
  <div>
    {status === 0 ? (
      <Button
        disabled={!canStart}
        size="large"
        style={styleControlButton}
        type="primary"
        icon="play-circle"
        onClick={actions.start}
      >
        Start
      </Button>
    ) : (
      <Group>
        {status === 2 ? (
          <Button
            size="large"
            style={styleControlButton}
            icon="play-circle"
            onClick={actions.resume}
          />
        ) : (
          <Button
            size="large"
            style={styleControlButton}
            icon="pause-circle"
            onClick={actions.pause}
          />
        )}
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
          onClick={actions.reset}
        />
      </Group>
    )}
  </div>
);

export default Buttons;
