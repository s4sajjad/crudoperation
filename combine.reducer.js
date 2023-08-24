import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./user.reducer";
import { reducer as toastrReducer } from 'react-redux-toastr';

const combineReduser = () => {
    return combineReducers({
        user: UserReducer,
        toastr: toastrReducer
    })
}
export default combineReduser;