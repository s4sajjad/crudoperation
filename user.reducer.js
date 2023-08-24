import { ADD_USER_SUCCESS, GET_USER_SUCCESS } from "../constant/user.constant"

const initialState = {

  users: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [] 

}

let d = [];
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      d = [...action.payload];
      localStorage.setItem('user', JSON.stringify(d))
      return {
        ...state,
        users: d
      }
    case ADD_USER_SUCCESS:
      d = [...state.users, action.payload];
      localStorage.setItem('user', JSON.stringify(d))
      return {
        ...state,
        users: d
      }
    default:
      return state
  }
}
export default UserReducer