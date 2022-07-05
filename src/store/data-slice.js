import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'cart',
    initialState: {
        posts: [],
        comments: [],
    },
    reducers: {
        replaceCart(state, action) {
            state.posts = action.payload;

        },
        replaceComment(state, action) {
            console.log(action);
            state.comments = action.payload
        }

    },
});

export const localStorageDataMiddleware = ({ dispatch, getState }) => {
    console.log(dispatch)
    console.log(getState())
    return next => action => {
        let result;
        if (typeof action === 'function') {
            result = next(action);
            const dataAction = action(dispatch, getState)
            return dataAction;
        } else {
             result = next(action);
            localStorage.setItem('applicationDataState', JSON.stringify(getState()));
            return result;
        }
        // const dataAction = action(dispatch, getState)

    };
};

export const reHydrateStore = () => {
    if (localStorage.getItem('applicationState') !== null) {
        return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
    }
};

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;