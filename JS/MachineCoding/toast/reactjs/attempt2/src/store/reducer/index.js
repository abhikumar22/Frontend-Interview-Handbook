import toast from "./ToastReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    toastReducer: toast,
});
export default allReducers;