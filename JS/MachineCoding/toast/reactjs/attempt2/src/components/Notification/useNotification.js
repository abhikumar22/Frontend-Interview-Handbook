
import { useDispatch } from "react-redux";
import { ADD_TOAST } from '../../store/action/ToastAction'


const App = () => {
    const dispatch = useDispatch();
    const toast = () => {
        toast.info = () => {
            dispatch({ 
                type: ADD_TOAST,
                id: Date.now(),
                toastType: "info"
             })
        }
        toast.success = () => {
            dispatch({ 
                type: ADD_TOAST,
                id: Date.now(),
                toastType: "success"
             })
        }
        toast.error = () => {
            dispatch({ 
                type: ADD_TOAST,
                id: Date.now(),
                toastType: "error"
             })
        }
        return toast
    }
    return { toast: toast() };
}
export default App;