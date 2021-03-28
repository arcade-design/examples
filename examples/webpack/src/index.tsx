import React from 'react';
import ReactDOM from 'react-dom';
import { Arcade, Button, Frame, Text, Stack } from 'arcade';
import theme from 'arcade/themes/arcade';

const App = () => {
  return (
    <Arcade theme={theme}>
      <Frame align="center">
        <Stack align="center">
          <Text variant="display3">Welcome to Arcade</Text>
          <Button
            color="primary"
            href="https://arcade.design"
            attributes={{ target: '_blank' }}
          >
            Check our website
          </Button>
        </Stack>
      </Frame>
    </Arcade>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
