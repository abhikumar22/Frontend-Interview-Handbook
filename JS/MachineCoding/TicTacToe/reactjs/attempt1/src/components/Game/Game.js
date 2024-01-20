import React, { useEffect, useState } from "react";
import "./styles.css";
const USER = {
  CROSS: "CROSS",
  CIRCLE: "CIRCLE"
};
export const Game = () => {
  const boxRange = 9;
  const [res, setRes] = useState(new Array(boxRange).fill(""));
  const [currUser, setCurrUser] = useState(USER.CROSS);

  const checkMatching = (type) => {
    const isDiagonal = !!(
      (res[0] === type && res[4] === type && res[8] === type) ||
      (res[2] === type && res[4] === type && res[6] === type)
    );

    const isRow = !!(
      (res[0] === type && res[1] === type && res[2] === type) ||
      (res[3] === type && res[4] === type && res[5] === type) ||
      (res[6] === type && res[7] === type && res[8] === type)
    );

    const isCol = !!(
      (res[0] === type && res[3] === type && res[6] === type) ||
      (res[1] === type && res[4] === type && res[7] === type) ||
      (res[2] === type && res[5] === type && res[8] === type)
    );
    const isWon = !!(isDiagonal || isRow || isCol);
    if (isWon) {
      alert(`${type} won the match`);
      resetGame();
      return true;
    }
    const isEmpty = res.filter((data) => data != "");
    if (!isWon && isEmpty.length === 9) {
      console.log("**** here", res);

      alert("match Draw");
      resetGame();
    }
  };
  useEffect(() => {
    const firstCheck = checkMatching(USER.CROSS);
    if (!firstCheck) checkMatching(USER.CIRCLE);
  }, [res]);
  const handleClick = (e, indx) => {
    if (res[indx] != "") return;
    let temp = [...res];
    temp[indx] = currUser;
    setRes(temp);
    const userChange = currUser === USER.CIRCLE ? USER.CROSS : USER.CIRCLE;
    setCurrUser(userChange);
  };
  const resetGame = () => {
    setRes(new Array(boxRange).fill(""));
    setCurrUser(USER.CROSS);
  };

  return (
    <div>
      Curr Player: {currUser}
      <div className="Game_Box">
        {[...Array(boxRange)].map((data, index) => {
          return (
            <div
              key={index}
              className="box"
              onClick={(e) => handleClick(e, index)}
            >
              {res[index] != "" &&
                (res[index] === USER.CROSS ? (
                  <div className="CORSS">X</div>
                ) : (
                  <div className="CIRCLE">O</div>
                ))}
              {}
            </div>
          );
        })}
      </div>
    </div>
  );
};
