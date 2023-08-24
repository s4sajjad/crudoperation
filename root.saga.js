import {all, fork} from "redux-saga/effects";
import { user } from "./user.saga";
function * root(){
  return yield all([
    fork(user)
    ])
}
export default root;