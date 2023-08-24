import { configureStore } from "@reduxjs/toolkit";
import combineReduser from "../reducer/combine.reducer";
import createSagaMiddleware from "redux-saga";
import root from "../saga/root.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: combineReduser(),
    middleware:[sagaMiddleware],
    devTools:true
})
sagaMiddleware.run(root);
export default store;