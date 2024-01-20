const CardComponent = ({ data }) => {
  return (
    <div
      key={data.id}
      style={{ margin: "2em", height: "200px", background: "red" }}
    >
      {data.name}
    </div>
  );
};
export default CardComponent;
