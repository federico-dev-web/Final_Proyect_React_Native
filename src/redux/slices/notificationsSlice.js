import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
    name: "notifications",
    initialState: {
        notificationsList: []
    },
    reducers: {
    }
})

export default notificationsSlice.reducer