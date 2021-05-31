import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "../redux/store";
import styled from "styled-components";
import {IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline, IoMdTrash} from "react-icons/io";

import {removeTodo, setTodoStatus} from "../redux/todoSlice";
import {Todo} from "../Model/Todo";
import {device} from "../Model/MediaQueries";

const Wrapper = styled.div`
  font-size: 15px;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 20px 15px;
  background-color: rgba(77, 77, 77, 0.8);
  min-width: 300px;

@media${device.mobileM} {
  min-width: 340px;
} @media${device.tablet} {
  min-width: 600px;
  font-size: 21px;
} @media${device.laptop} {
  min-width: 850px;
  max-width: 90vw;
  flex-direction: row;
  justify-content: space-between;
  font-size: 23px;
} @media${device.laptopL} {
  min-width: 20vw;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px 0 30px 0 ;
`

const Ul = styled.ul`
@media${device.laptopL} {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 90vw;
}

`
const Li = styled.li`
  margin: 13px;
  list-style: none;
  color: ${props => props.color};
  transition: all 0.5s;
  word-break: break-all;
`

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: space-between;

  h1 {
    margin: 5px 10px;
  }
`

const Button = styled.button`
{
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

@media${device.laptop} {
  padding: 3px 12px;
  margin: 3px;
}
`

export const TodoList = ():JSX.Element => {
    const todoList: Todo [] = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Wrapper>
            <Ul>
                {todoList.map((todo) => {
                    return (
                        <Div key={todo.id}>
                            <Li color={todo.completed ? "grey" : "white"}>
                                {todo.content}
                            </Li>
                            <Section>
                                <Button
                                    color={todo.completed ? "green" : "grey"}
                                    onClick={() => {
                                        dispatch((setTodoStatus({completed: !todo.completed, id: todo.id})))
                                    }}
                                >{todo.completed ?
                                    <IoIosCheckmarkCircleOutline size={24}/>
                                    : <IoIosCloseCircleOutline size={24}/>}
                                </Button>
                                <h1>|</h1>

                                <Button
                                    color="red"
                                    onClick={() => {
                                        dispatch(removeTodo(todo.id))
                                    }}><IoMdTrash size={24}/>
                                </Button>
                            </Section>
                        </Div>
                    )
                })}
            </Ul>
        </Wrapper>
    );
};