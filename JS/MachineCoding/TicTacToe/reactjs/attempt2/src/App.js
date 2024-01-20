import { useEffect, useState } from "react";
import "./styles.css";

const USER_TYPE = {
  CIRCLE: "CIRCLE",
  CROSS: "CROSS"
};
const GAME_SIZE = 9;

export default function App() {
  const [currUser, setUser] = useState(USER_TYPE.CIRCLE);
  const [gamePoint, setGamePoint] = useState([...new Array(GAME_SIZE).fill(0)]);

  useEffect(() => {
    if (currUser === USER_TYPE.CIRCLE) {
      validateGame(USER_TYPE.CROSS);
    } else {
      validateGame(USER_TYPE.CIRCLE);
    }
  }, [gamePoint]);

  const handleResetGame = () => {
    setGamePoint([...new Array(GAME_SIZE).fill(0)]);
  };

  const handleClickBox = (e) => {
    const currentBoxIdx = e.target.id;
    let temp = [...gamePoint];
    if (temp[currentBoxIdx] !== 0) {
      return;
    }
    temp[currentBoxIdx] = currUser;
    setGamePoint([...temp]);
    changeUser();
  };
  const changeUser = () => {
    if (currUser === USER_TYPE.CIRCLE) {
      setUser(USER_TYPE.CROSS);
    } else {
      setUser(USER_TYPE.CIRCLE);
    }
  };
  const userUI = (index) => {
    const currBox = gamePoint[index];
    if (currBox === 0) return "";
    if (currBox === USER_TYPE.CIRCLE) {
      return "O";
    } else {
      return "X";
    }
  };
  const isGameDraw = () => {
    const isEmptyBox = gamePoint.filter((data) => data === 0);
    return isEmptyBox.length === 0 ? true : false;
  };

  const validateGame = (user) => {
    // row
    const isGameRowWon = !!(
      (gamePoint[0] === user &&
        gamePoint[1] === user &&
        gamePoint[2] === user) ||
      (gamePoint[3] === user &&
        gamePoint[4] === user &&
        gamePoint[5] === user) ||
      (gamePoint[6] === user && gamePoint[7] === user && gamePoint[8] === user)
    );
    const isGameColumnWon = !!(
      (gamePoint[0] === user &&
        gamePoint[3] === user &&
        gamePoint[6] === user) ||
      (gamePoint[1] === user &&
        gamePoint[4] === user &&
        gamePoint[7] === user) ||
      (gamePoint[2] === user && gamePoint[5] === user && gamePoint[8] === user)
    );
    const isGameDiagonalWon = !!(
      (gamePoint[0] === user &&
        gamePoint[4] === user &&
        gamePoint[8] === user) ||
      (gamePoint[2] === user && gamePoint[4] === user && gamePoint[6] === user)
    );

    const isGameWon = isGameRowWon || isGameColumnWon || isGameDiagonalWon;
    if (isGameWon) {
      alert(`Congratulation ${user} Won !!!!!`);
      handleResetGame();
      return;
    }

    if (isGameDraw()) {
      alert("Oops !!! Game Draw");
      handleResetGame();
      return;
    }
  };

  return (
    <div className="App">
      <button onClick={handleResetGame}> Reset</button>
      <div style={{ paddingTop: "10px" }}>Current User: {currUser}</div>
      <div className="boxWrapper">
        {[...new Array(GAME_SIZE).fill(0)].map((data, index) => (
          <div key={index} id={index} className="box" onClick={handleClickBox}>
            {userUI(index)}
          </div>
        ))}
      </div>
    </div>
  );
}
