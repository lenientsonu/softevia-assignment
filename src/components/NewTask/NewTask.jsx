import { useState } from "react";

import NewTaskForm from "./NewTaskForm";

const NewTask = () => {
    const [showForm, setShowForm] = useState(false);

    const showFormHandler = (event) => {
        event.preventDefault();
        setShowForm(true);
    };

    const hideFormHandler = () => {
        setShowForm(false);
    };

    return (
        <>
            {!showForm && (
                <button className='btn btn-outline' onClick={showFormHandler}>
                    Create Task
                </button>
            )}
            {showForm && <NewTaskForm hideForm={hideFormHandler} />}
        </>
    );
};

export default NewTask;
