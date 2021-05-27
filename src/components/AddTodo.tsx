import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import styled from "styled-components";

import {addTodo} from "../redux/todoSlice";

const Form = styled.form`
  display: flow;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  margin: 70px 0;
  font-size: 20px;
`

const Input = styled.input`
  width: 500px;
  padding: 10px;
  background: #778C8C;
  border: black solid 3px;
  color: white;
  font-size: 20px;

  &:focus {
    background: #4B5947;
  }

  ::placeholder {
    color: white;
  }
`

const Button = styled.button`
  margin: 0 20px;
  padding: 10px;
  background: #4B5947;
  border-radius: 7%;
  color: white;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;

  :disabled {
    opacity: 0.7;
    color: #778C8C;
  }

  &:hover {
    text-shadow: 0 0 6px rgba(255, 255, 255, 1);
    transition: all 0.3s ease 0s;
  }
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