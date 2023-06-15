import { useSelector, useDispatch } from "react-redux";

import { tasksActions } from "../../store/tasksSlice";

import "./Tasks.scss";

const Tasks = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        // console.log(id);
        dispatch(tasksActions.removeTasks(id));
    };

    return (
        <ul className='menu rounded-box task_list'>
            {tasks.map((task) => (
                <>
                    <li key={task.id} className='task'>
                        <h3 className='text-xl font-bold'>{task.title}</h3>
                        <p>{task.desc}</p>
                        <p>{task.dueDate}</p>
                        <button className='btn btn-outline'>Edit</button>
                        <button
                            className='btn btn-outline'
                            onClick={() => deleteHandler(task.id)}
                        >
                            Delete
                        </button>
                    </li>
                    <hr />
                </>
            ))}
        </ul>
    );
};

export default Tasks;
