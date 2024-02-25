// bar progress should is current workes n bars is completed

import { useRef, useState } from "react";
import ProgressBarCard from './components/ProgressBarCard';

const App = () => {
  const [progressBars, setProgressBars] = useState([]);
  const progressBarRef = useRef([]);

  const [currWorkerState, setCurrentWorkerState] = useState(0);
  const currentWorkerRef = useRef(0);

  const handleAddWorker = () => {
    if (currentWorkerRef.current < 4) {
      currentWorkerRef.current = currentWorkerRef.current + 1;
      setCurrentWorkerState(currentWorkerRef.current);
      return;
    }
  }

  const handleRemoveWorker = () => {
    currentWorkerRef.current = currentWorkerRef.current - 1;
    setCurrentWorkerState(currentWorkerRef.current);
  }


  const handleAdd = () => {
    const temp = [
      ...progressBarRef.current,
      false
    ]
    progressBarRef.current = temp;
    setProgressBars(progressBarRef.current);
  };

  const handleBarProgress = (indx) => {
    const temp = [
      ...progressBarRef.current,
    ]
    temp[indx] = true;
    progressBarRef.current = temp;
    setProgressBars(progressBarRef.current);
  };

  return (
    <div>
      hello abhishek
      <button onClick={() => handleAdd()}>Add Button</button>
      <div style={{ display: 'inline-grid' }}>
        {progressBars.map((data, indx) => {
          return (
            <ProgressBarCard
              key={indx}
              indx={indx}
              handleBarProgress={handleBarProgress}
              currentProgressState={progressBars[indx]}
              prevState={progressBars[indx - 1]}
              progressBarsStates={progressBars}
              handleAddWorker={handleAddWorker}
              handleRemoveWorker={handleRemoveWorker}
              currWorkerState={currWorkerState}
            />
          )
        })}
      </div>
    </div>
  )
};

export default App;