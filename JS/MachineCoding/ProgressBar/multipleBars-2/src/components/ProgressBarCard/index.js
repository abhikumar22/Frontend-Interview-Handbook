import { useEffect, useRef, useState } from "react";

const ProgressBarCard = ({
  indx,
  handleBarProgress,
  currentProgressState,
  progressBarsStates,
  prevState,
  handleRemoveWorker,
  handleAddWorker,
  currWorkerState,
}) => {
  const [progressState, setProgressState] = useState(0);
  const progressRef = useRef(0);
  const lastrefs = progressBarsStates.slice(0, indx);
  const ress = lastrefs.filter(x => !x).length < 4;

  useEffect(() => {
    if (indx === 0 && currentProgressState === false) {
      handleAddWorker();
      let timer = setInterval(() => {
        if (progressRef.current < 100) {
          progressRef.current = progressRef.current + 10;
          setProgressState(progressRef.current);
          return;
        }
        handleBarProgress(indx);
        handleRemoveWorker();
        clearInterval(timer);
      }, 1000);
      return;
    }
    if (
      currentProgressState === false
      && currWorkerState < 4
    ) {
      handleAddWorker();
      let timer = setInterval(() => {
        if (progressRef.current < 100) {
          progressRef.current = progressRef.current + 10;
          setProgressState(progressRef.current);
          return;
        }
        handleBarProgress(indx);
        handleRemoveWorker();
        clearInterval(timer);
      }, 1000);
      return
    }
  }, [
    ress
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