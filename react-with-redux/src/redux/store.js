import { createStore } from "redux";
import { kartReducer } from "./reducer/kartReducer"


const store = createStore(kartReducer);

export default store;