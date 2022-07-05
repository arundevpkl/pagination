import { createSlice } from '@reduxjs/toolkit'
const initialAuthState = {
    users: [],
    isAuthenticated: false,
    names:[]
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        add(state, action) {
            console.log("actions",action.payload);
            const token = action.payload
            const findToken = state.users.find(el => el === token)
            if(!findToken){
             state.users = [action.payload, ...state.users];
           
            }else{
             alert('account is already there')
            }
          
        },
        login(state, action) {
            const token = action.payload.token
            const findToken = state.users.find(el => el === token)
            if(findToken){
                state.isAuthenticated = true;
                state.names = action.payload.enteredEmail;
            }else{
                alert('No account found...!!!')
            }
           
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

export const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      localStorage.setItem('applicationState', JSON.stringify(getState()));
      return result;
    };  
  };
  
  export const  reHydrateStore = () => {
    if (localStorage.getItem('applicationState') !== null) {
      return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
    }
  };
  

export const authActions = authSlice.actions;
export default authSlice.reducer;
