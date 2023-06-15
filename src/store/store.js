import { configureStore } from "@reduxjs/toolkit";

import tasksSlice from "./tasksSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        tasks: tasksSlice,
        auth: authSlice,
    },
});

export default store;
