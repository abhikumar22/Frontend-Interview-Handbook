import './myStyle.css';
import { useDispatch } from "react-redux";
import { REMOVE_TOAST } from '../../store/action/ToastAction'
import { useEffect, useRef, useState } from 'react';


const App = ({ currId, type }) => {
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(null);

    const dispatch = useDispatch();
    const closeToast = () => {
        dispatch({
            type: REMOVE_TOAST,
            id: currId
        })
    }
    const startTimer = () => {
        if (progressRef.current === null) {
            progressRef.current = setInterval(() => {
                setProgress(prev => {
                    if (prev < 100) {
                        return prev + 1
                    }
                    clearInterval(progressRef.current);
                    closeToast();
                });
            }, 20)
        }
    }
    const pauseTimer = () => {
        if (progressRef.current !== null) {
            clearInterval(progressRef.current)
            progressRef.current = null;
        }
    }
    useEffect(() => {
        startTimer();
    }, [])
    return (
        <div
            onMouseEnter={() => pauseTimer()}
            onMouseLeave={() => startTimer()}
            className={` EachNotification  ${type}`}>
            Toast
            <div onClick={() => {
                closeToast();
            }} className='close'>Close</div>
            <div style={{ width: `${progress}%` }} className='toastProgress'></div>
        </div>
    )
}
export default App;