import { useSelector } from "react-redux";
import NotificationComponent from './NotificationComponent';
import './index.css'


const App = () => {
    const toastReducer = useSelector((state) => state.toastReducer.toastState) || [];
    return (
        <div className="Toast-Container">
            {toastReducer
                && toastReducer.length > 0
                && toastReducer.map((curr, indx) => {
                    const { id, toastType } = curr;
                    return (<NotificationComponent type={toastType} currId={id} key={id} />)
                })}
        </div>
    )
}
export default App;