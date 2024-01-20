const Button = ({ text = "Click here", handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};
export default Button;
