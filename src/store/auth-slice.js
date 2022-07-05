import { createSlice } from '@reduxjs/toolkit'
const initialAuthState = {
    users: [],
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        add(state, action) {
        },
        delete(state, action) {
        },
        login(state, action) {
        },
        logout(state) {
        },
    },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
