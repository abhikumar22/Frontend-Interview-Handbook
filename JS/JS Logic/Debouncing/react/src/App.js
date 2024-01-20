import "./styles.css";
import Button from "./components/Button";

export default function App() {
  function handleApiCall(e) {
    console.log("here clicked", e.target.value);
  }
  function debouncing(fn, delay) {
    let timer;
    return function (...args) {
      let context = this;
      console.log(",....,context,args");
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }
  return (
    <div className="App">
      <input
        placeholder={"Enter Search Text"}
        onChange={debouncing(handleApiCall, 500)}
      />
    </div>
  );
}
