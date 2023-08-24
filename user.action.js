import { ADD_USER_ERROR, ADD_USER_START, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_START, DELETE_USER_SUCCESS, EDIT_USER_ERROR, EDIT_USER_START, EDIT_USER_SUCCESS, GET_USER_ERROR, GET_USER_START, GET_USER_SUCCESS } from "../constant/user.constant";

export const getUserStart =() => ({
   type:GET_USER_START
})
export const getUserSuccess =(data) => ({
    type:GET_USER_SUCCESS,
    payload: data
 })
 export const getUserError =(error) => ({
    type:GET_USER_ERROR,
    payload: error
 })

 export const addUserStart =(data) => ({
   type:ADD_USER_START,
   payload: data
})
export const addUserSuccess =(data) => ({
    type:ADD_USER_SUCCESS,
    payload: data
 })
 export const addUserError =(error) => ({
    type:ADD_USER_ERROR,
    payload: error
 })

 export const editUserStart =(data, id) => ({
   type:EDIT_USER_START,
   payload: {
      data,
      id
   }
})
export const editUserSuccess =(data, id) => ({
    type:EDIT_USER_SUCCESS,
    payload: {
      data,
      id
    }
 })
 export const editUserError =(error) => ({
    type:EDIT_USER_ERROR,
    payload: error
 })
 export const deleteUserStart =( id ) => ({
   type:DELETE_USER_START,
   payload: id
   
})
export const deleteUserSuccess =( id ) => ({
    type:DELETE_USER_SUCCESS,
    payload: id
    
 })
 export const deleteUserError =(error) => ({
    type:DELETE_USER_ERROR,
    payload: error
 })