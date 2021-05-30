import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "../redux/store";
import styled from "styled-components";
import {IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline, IoMdTrash} from "react-icons/io";

import {removeTodo, setTodoStatus} from "../redux/todoSlice";
import {Todo} from "../Model/Todo";

const Wrapper = styled.div`
  font-size: 15px;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 20px 0;
  background-color: rgba(77, 77, 77, 0.8);
  min-width: 200px;
  max-width: 280px;
`

const Li = styled.li`
  margin: 13px;
  list-style: none;
  color: ${props => props.color};
  transition: all 0.5s;
`

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: space-between;
  h1{
    margin: 5px 10px;
  }
`

const Button = styled.button`
{
  size: 35px;
  background-color: ${props => props.color};
  display: inline-block;
  padding: 1px 8px;
  margin: 3px 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  text-decoration: none;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  color: #FFFFFF;
  letter-spacing: 1px;
  text-align: center;
  transition: all 0.5s;
}
  :hover {
    border-color: rgba(255, 255, 255, 1);
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
                            <Li color = {todo.completed  ?  "grey" : "white"}>
                                {todo.content}
                            </Li>
                            <Section>
                                <Button
                                    color={todo.completed ? "green" : "grey"}
                                    onClick={() => {
                                        dispatch((setTodoStatus({completed: !todo.completed, id: todo.id})))
                                    }}
                                >{todo.completed ?
                                    <IoIosCheckmarkCircleOutline size={28}/>
                                    : <IoIosCloseCircleOutline size={28}/>}
                                </Button>
                                <h1>|</h1>

                                <Button
                                    color="red"
                                    onClick={() => {
                                        dispatch(removeTodo(todo.id))
                                    }}><IoMdTrash size={28} />
                                </Button>
                            </Section>
                        </Div>
                    )
                })}
            </ul>
        </Wrapper>
    )
}