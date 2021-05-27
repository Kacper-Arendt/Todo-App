import React from 'react';

import {TodoList} from "./components/TodoList";
import {AddTodo} from "./components/AddTodo";
import {createGlobalStyle} from "styled-components";
import background from './assets/sheep-6262928_1920.jpg'

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
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`

function App() {
    return (
        <React.Fragment>
            <GlobalStyle/>
            <AddTodo/>
            <TodoList/>
        </React.Fragment>
    );
}

export default App;
