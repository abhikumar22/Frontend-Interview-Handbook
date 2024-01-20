import { useState } from "react";
import Boards from "./components/Boards";
import { CARD_MOVE, BOARD_TYPES } from "./constants";
import "./styles.css";

export default function App() {
  const [cardState, setCardState] = useState([
    {
      name: "card 1",
      status: "TODO",
      id: 1
    },
    {
      name: "card 2",
      status: "TODO",
      id: 2
    },
    {
      name: "card 3",
      status: "DEV",
      id: 3
    },
    {
      name: "card 4",
      status: "DONE",
      id: 4
    }
  ]);

  const handleDragCard = (...prr) => {
    let temp = cardState;
    let cardId = prr[0];
    let toDestination = prr[3];
    temp = temp.map((vall) => {
      if (vall.id === cardId) {
        vall.status = toDestination;
      }
      return vall;
    });
    setCardState(temp);
  };

  const handleChangeCardStatus = (...data) => {
    const moveType = data[0];
    const cardObj = data[1];
    const currBoard = data[2];
    let temp = cardState;

    if (moveType === CARD_MOVE.LEFT) {
      switch (currBoard) {
        case BOARD_TYPES.DEV:
          temp = temp.map((vall) => {
            if (vall.id === cardObj.id) {
              vall.status = "TODO";
            }
            return vall;
          });
          break;
        case BOARD_TYPES.DONE:
          temp = temp.map((vall) => {
            if (vall.id === cardObj.id) {
              vall.status = "DEV";
            }
            return vall;
          });
          break;
        default:
      }
    } else {
      switch (currBoard) {
        case BOARD_TYPES.TODO:
          temp = temp.map((vall) => {
            if (vall.id === cardObj.id) {
              vall.status = "DEV";
            }
            return vall;
          });
          break;
        case BOARD_TYPES.DEV:
          temp = temp.map((vall) => {
            if (vall.id === cardObj.id) {
              vall.status = "DONE";
            }
            return vall;
          });
          break;
        default:
      }
    }

    setCardState(temp);
  };
  return (
    <div className="App">
      <Boards
        handleDragCard={handleDragCard}
        data={cardState}
        handleChangeCardStatus={handleChangeCardStatus}
      />
    </div>
  );
}
