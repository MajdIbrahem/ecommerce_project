import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    email: null,
    userName: null,
    userID:null
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_ACTIVE_USER(state,actions) {
            state.isLoggedIn = true;
            state.email = actions.payload.email;
            state.userName = actions.payload.userName;
            state.userID = actions.payload.userID;
        },
        REMOVE_ACTIVE_USER(state,actions) {
            
            state.isLoggedIn = false;
            state.email = null ;
            state.userName = null;
            state.userID =null ;
        },
    }
});
export const {SET_ACTIVE_USER,REMOVE_ACTIVE_USER} = authSlice.actions;
export default authSlice.reducer