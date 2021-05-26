import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import styled from "styled-components";

import {addTodo} from "../redux/todoSlice";

const Form = styled.form `
  display: flow;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  margin: 70px 0;
  font-size: 20px;
`

const Input = styled.input`
  padding: 10px;
  width: 500px;
  font-size: 20px;
  background: #778C8C;
  border: black solid 3px;
  color: white;
  &:focus {
    background: #4B5947;
  }
  ::placeholder{
    color: white;
  }
`

const Button = styled.button`
  padding: 10px;
  color: ${props => props.disabled ? "white" : 'black'};
  background: ${props => props.disabled ? "grey": 'white'};
  margin: 0 20px;
  border-radius: 7%;
  font-size: 20px;
`

export const AddTodo = () => {
    const [todoDescription, setTodoDescription] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const setTodoHandler = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        dispatch(addTodo(todoDescription));
        setTodoDescription('');
    }

    return (
        <Form>
                <Input
                    type="text"
                    id="task"
                    name="task"
                    placeholder="Enter Your Task"
                    value={todoDescription}
                    onChange={(e) => setTodoDescription(e.target.value)}
                />
                <Button
                    disabled={!todoDescription}
                    onClick={setTodoHandler}
                >Confirm</Button>
        </Form>
    )
}