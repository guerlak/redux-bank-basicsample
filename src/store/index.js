import { createStore } from "redux";
import reducer from '../reducers'
import photographer from "../images/girl.png";

const initialReducer = {
    userPicture: photographer,
    username: "Guerlak",
    totalAmount: "100000"
}

const store = createStore(reducer, initialReducer)

export default store;
