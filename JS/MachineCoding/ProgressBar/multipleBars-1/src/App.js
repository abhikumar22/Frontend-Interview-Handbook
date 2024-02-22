import { useRef, useState } from "react";
import ProgressBarCard from './components/ProgressBarCard';

const App = () => {
  const [progressBars, setProgressBars] = useState([]);
  const progressBarRef = useRef([]);


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
              prevState={progressBars[indx-1]}
              progressBarsStates={progressBars}
            />
          )
        })}
      </div>
    </div>
  )
};

export default App;