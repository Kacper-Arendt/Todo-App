import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import {addTodo} from "../redux/todoSlice";

export const AddTodo = () => {
    const [todoDescription, setTodoDescription] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const setTodoHandler = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        dispatch(addTodo(todoDescription));
        setTodoDescription('');
    }
    console.log(todoDescription)
    return (
        <form>
            <div>
                <label htmlFor="task">Set Task: </label>
                <input
                    type="text"
                    id="task"
                    name="task"
                    value={todoDescription}
                    onChange={(e) => setTodoDescription(e.target.value)}
                />
            </div>
            <div>
                <button
                    disabled={!todoDescription}
                    onClick={setTodoHandler}>
                    SET
                </button>
            </div>
        </form>
    )
}