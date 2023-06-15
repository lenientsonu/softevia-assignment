import { useState } from "react";
import { useDispatch } from "react-redux";

import { tasksActions } from "../../store/tasksSlice";

import "./NewTaskForm.scss";

const NewTaskForm = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(new Date());
    const dispatch = useDispatch();

    const cancelHandler = (event) => {
        event.preventDefault();
        props.hideForm();
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expense = {
            id: new Date().getTime(),
            title,
            desc,
            dueDate: date,
        };
        // console.log(expense);
        dispatch(tasksActions.addTask(expense));
        props.hideForm();
    };

    return (
        <form className='form' onSubmit={submitHandler}>
            <input
                type='text'
                placeholder='Task Title'
                className='input input-bordered w-full max-w-xs'
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                type='text'
                placeholder='Task Description'
                className='input input-bordered w-full max-w-xs'
                required
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
            />
            <input
                type='date'
                className='input input-bordered w-full max-w-xs '
                required
                value={date}
                onChange={(event) => setDate(event.target.value)}
            />

            <div className='form__actions'>
                <button className='btn btn-outline' onClick={cancelHandler}>
                    Cancel
                </button>
                <button className='btn btn-outline'>Add Task</button>
            </div>
        </form>
    );
};

export default NewTaskForm;
