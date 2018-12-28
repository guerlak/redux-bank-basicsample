import { createStore } from "redux";
import reducer from '../reducers'

const initialReducer = {
    username: "Guerlak",
    totalAmount: "100000"
}

const store = createStore(reducer, initialReducer)

export default store;
