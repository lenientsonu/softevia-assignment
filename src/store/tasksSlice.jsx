import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: "t1",
            title: "Task 1",
            desc: "Task 1 description",
            dueDate: "2023-06-14",
        },
        {
            id: "t2",
            title: "Task 2",
            desc: "Task 2 description",
            dueDate: "2023-06-16",
        },
        {
            id: "t3",
            title: "Task 3",
            desc: "Task 3 description",
            dueDate: "2023-06-19",
        },
    ],
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },
        removeTasks(state, action) {
            console.log(state.tasks, action.payload);
            state.tasks = state.tasks.filter((task) => {
                return task.id !== action.payload;
            });
            console.log(state.tasks);
        },
    },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
