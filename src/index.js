import React from 'react';
import { render } from 'react-dom';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import styled from 'styled-components';

import { TextInput } from './lib';

const scope = {
  TextInput,
};

const code = `
<div>
  <h1>Hello React</h1>
  <TextInput label="Email Address" placeholder="name@example.com" />
</div>
`;

const code2 = `
<div>
  <h2>Sign In</h2>
  <TextInput
    label="Username"
    placeholder="Enter your username"
  />
  <TextInput
    type="password"
    label="Password"
    placeholder="Enter your password"
  />
</div>
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const Block = styled.div`
  width: 45%;
  padding: 1rem .5rem;
  box-shadow: 1px 2px 3px #ddd;
  border: 1px solid #eee;
  height: 100%;
`;

const App = () => (
  <div>
    <LiveProvider code={code.trim()} scope={scope}>
      <Container>
        <Block>
          <LiveEditor />
          <LiveError />
        </Block>
        <Block>
          <LivePreview />
        </Block>
      </Container>
    </LiveProvider>
    <hr />
    <LiveProvider code={code2.trim()} scope={scope}>
      <Container>
        <Block>
          <LiveEditor />
          <LiveError />
          <p>
            You can also use the <code>type</code> prop to change the type of the input box.
            In this example, we've changed to to <code>password</code> and as a result the input
            is now a password input. Who woulda thunk it?
          </p>
        </Block>
        <Block>
          <LivePreview />
        </Block>
      </Container>
    </LiveProvider>
    <hr />
  </div>
);

render(<App />, document.getElementById('root'));
