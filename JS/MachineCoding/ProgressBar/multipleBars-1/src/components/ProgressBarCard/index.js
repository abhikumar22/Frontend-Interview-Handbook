import { useEffect, useRef, useState } from "react";

const ProgressBarCard = ({
  indx,
  handleBarProgress,
  currentProgressState,
  progressBarsStates,
  prevState,
}) => {
  const [progressState, setProgressState] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    if (indx === 0 && currentProgressState === false) {
      let timer = setInterval(() => {
        if (progressRef.current < 100) {
          progressRef.current = progressRef.current + 10;
          setProgressState(progressRef.current);
          return;
        }
        handleBarProgress(indx);
        clearInterval(timer);
      }, 1000);
      return;
    }
    if (prevState === true && currentProgressState === false) {
      let timer = setInterval(() => {
        if (progressRef.current < 100) {
          progressRef.current = progressRef.current + 10;
          setProgressState(progressRef.current);
          return;
        }
        handleBarProgress(indx);
        clearInterval(timer);
      }, 1000);
      return
    }
  }, [
    prevState
  ])

  return (
    <div>
      <div style={{ border: '1px solid black', width: '200px', height: '20px', margin: '1em' }}>
        <div style={{ width: `${progressState}%`, height: '100%', backgroundColor: 'red' }}></div>
      </div>
    </div>
  )
};

export default ProgressBarCard;