import React from 'react';
import styled, {createGlobalStyle} from "styled-components";

import {TodoList} from "./components/TodoList";
import {AddTodo} from "./components/AddTodo";
import Background from './assets/Background.jpg'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  html {
    height: 100%;
    width: 100%;
  }
  body {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: url(${Background});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App():JSX.Element {
    return (
        <Wrapper>
            <GlobalStyle/>
            <AddTodo/>
            <TodoList/>
        </Wrapper>
    );
}

export default App;