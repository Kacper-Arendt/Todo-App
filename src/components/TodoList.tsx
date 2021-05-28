import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "../redux/store";
import styled from "styled-components";

import {removeTodo, setTodoStatus} from "../redux/todoSlice";
import {Todo} from "../Model/Todo";

const Wrapper = styled.div`
  margin: 50px 0;
  font-size: 25px;
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  margin: 25px 0;
  background-color: rgba(77, 77, 77, 0.8);
  min-width: 650px;
`

const Li = styled.li`
  margin: 13px;
  list-style: none;
  color: white;
`

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`

const Button = styled.button`
{
  background-color: ${props => props.color ? props.color : 'green'};
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 3px 10px;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  text-decoration: none;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  color: #FFFFFF;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 700;
  transition: all 0.5s;
}
  :hover {
    border-color: rgba(255, 255, 255, 1);
  }

  @media all and (max-width: 30em) { {
    display: block;
    margin: 0.2em auto;

  }
`

export const TodoList = () => {
    const todoList: Todo [] = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Wrapper>
            <ul>
                {todoList.map((todo) => {
                    return (
                        <Div key={todo.id}>
                            <Li>
                                {todo.content}
                            </Li>
                            <Section>
                                <h1>|</h1>
                                <Button
                                    color = {todo.completed ? "green" : "grey"}
                                    onClick={() => {
                                        dispatch((setTodoStatus({completed: !todo.completed, id: todo.id})))}}
                                >Done</Button>
                                <Button
                                    color="red"
                                    onClick={() => {
                                        dispatch(removeTodo(todo.id))
                                    }}>Remove
                                </Button>
                            </Section>
                        </Div>
                    )
                })}
            </ul>
        </Wrapper>
    )
}