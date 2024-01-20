import { useRef, useState } from "react";
import "./customStyle.css";
const ProgressBar = () => {
  const [progressState, setProgress] = useState(0);
  const progressRef = useRef(null);

  const handleStart = () => {
    if (progressRef && progressRef.current === null) {
      progressRef.current = setInterval(() => {
        setProgress((x) => (x < 100 ? x + 10 : x));
      }, 1000);
    }
  };
  const handlePause = () => {
    clearInterval(progressRef.current);
    progressRef.current = null;
  };
  const handleStop = () => {
    clearInterval(progressRef.current);
    setProgress(0);
    progressRef.current = null;
  };
  return (
    <div className="Wrapper">
      <div className="progressBar">
        <div className="box" style={{ width: `${progressState}%` }}></div>
      </div>
      <div className="buttonWrapper">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};
export default ProgressBar;
