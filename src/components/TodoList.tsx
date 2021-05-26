import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "../redux/store";

import {removeTodo, setTodoStatus} from "../redux/todoSlice";
import {Todo} from "../Model/Todo";

export const TodoList = () => {
    const todoList: Todo [] = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <ul>
                {todoList.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <li>
                                {todo.content}
                            </li>
                            <button onClick={() => {
                                dispatch(removeTodo(todo.id))
                            }}>Remove
                            </button>
                            <input
                                type="checkbox"
                                onChange={() => {
                                    dispatch(setTodoStatus({completed: !todo.completed, id: todo.id}))
                                }}
                            />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}