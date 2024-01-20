import styles from "./Cards.module.scss";
import { CARD_MOVE } from "../../constants";
const Cards = ({
  name,
  handleChangeCardStatus,
  data,
  cardBoard,
  toShowRight,
  toShowLeft
}) => {
  const handleOnDragStart = (event) => {
    event.dataTransfer.setData("cardId", data.id);
    event.dataTransfer.setData("fromSource", cardBoard);
    event.dataTransfer.setData("data", data);
  };

  return (
    <div onDragStart={handleOnDragStart} draggable className={styles.Container}>
      {toShowLeft && (
        <span
          onClick={() =>
            handleChangeCardStatus(CARD_MOVE.LEFT, data, cardBoard)
          }
        >
          {"<"}
        </span>
      )}
      <span className={styles.Card__Name}>{name}</span>
      {toShowRight && (
        <span
          onClick={() =>
            handleChangeCardStatus(CARD_MOVE.RIGHT, data, cardBoard)
          }
        >
          {">"}
        </span>
      )}
    </div>
  );
};

export default Cards;
