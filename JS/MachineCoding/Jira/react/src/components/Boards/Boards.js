import { BOARD_TYPES } from "../../constants";
import Cards from "../Cards";
import styles from "./Boards.module.scss";

const RIGHT_SWIPE_ALLOWED = ["TODO", "DEV"];
const LEFT_SWIPE_ALLOWED = ["DONE", "DEV"];

const Boards = ({ data, handleChangeCardStatus, handleDragCard }) => {
  return (
    <div className={styles.Container}>
      {Object.keys(BOARD_TYPES).map((boardName, index) => {
        const toShowRight = !!(RIGHT_SWIPE_ALLOWED.indexOf(boardName) > -1);
        const toShowLeft = !!(LEFT_SWIPE_ALLOWED.indexOf(boardName) > -1);

        const onDragEndHandler = (dragData) => {
          let cardId = dragData.dataTransfer.getData("cardId");
          let fromSource = dragData.dataTransfer.getData("fromSource");
          let cardData = dragData.dataTransfer.getData("data");
          handleDragCard(cardId, fromSource, cardData, boardName);
        };

        return (
          <div
            onDrop={onDragEndHandler}
            onDragOver={(e) => {
              e.preventDefault();
            }}
            key={boardName}
            className={styles.Each__Board__Container}
          >
            {boardName}
            <div className={styles.Each__Board__Content}>
              {data &&
                data.length > 0 &&
                data.map((eachCardValue, index) => {
                  const {
                    name: EachCardName = "",
                    status: CardStatus = ""
                  } = eachCardValue;
                  const renderCard = !!!(boardName !== CardStatus);
                  return renderCard ? (
                    <Cards
                      handleChangeCardStatus={handleChangeCardStatus}
                      data={eachCardValue}
                      key={EachCardName}
                      name={EachCardName}
                      cardBoard={boardName}
                      toShowRight={toShowRight}
                      toShowLeft={toShowLeft}
                    />
                  ) : null;
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Boards;
