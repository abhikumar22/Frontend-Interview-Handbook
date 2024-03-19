// import "./styles.css";
// import Button from "./components/Button";

// export default function App() {
//   function handleApiCall(e) {
//     console.log("here clicked", e.target.value);
//   }
//   function debouncing(fn, delay) {
//     let timer;
//     return function (...args) {
//       let context = this;
//       console.log(",....,context,args");
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         fn.apply(context, args);
//       }, delay);
//     };
//   }
//   return (
//     <div className="App">
//       <input
//         placeholder={"Enter Search Text"}
//         onChange={debouncing(handleApiCall, 500)}
//       />
//     </div>
//   );
// }

// import "./App.css";
import React, { useCallback, useRef, useState } from "react";

function App() {
  const [mesg, setMesg] = useState(0);
  const [pin, setPin] = useState("");
  const abortConRef = useRef();
  const debounce = (fn, timer) => {
    let time;
    return function () {
      let arg = arguments;
      let context = this;
      if (time) clearTimeout(time);
      time = setTimeout(() => {
        fn.apply(context, arg);
        time = null;
      }, timer);
    };
  };

  const onChangeHandler = (val) => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    console.log(val);
    //  check if already ref is set then cancel the abort controller
    if (abortConRef.current) abortConRef.current.abort();
    // create a new controller and assign to ref
    abortConRef.current = new AbortController();

    // assign it to signal, so the fetch will be pointed by the reference
    fetch(url, { signal: abortConRef.current.signal })
      .then((result) => {
        return result.json();
      })
      .then((res) => {
        // const result = await res.json();
        console.log(res.title);
        // setPin(val);
        setMesg((prev) => prev + 1);
      })
      .catch((e) => console.log(e));
  };
  // const newHandler = debounce(onChangeHandler, 400);
  const newHandler = useCallback(debounce(onChangeHandler, 2000), []);

  return (
    <div className="App">
      <p>{mesg}</p>
      <input
        type="text"
        placeholder="PIN code"
        value={pin}
        onChange={(e) => {
          setPin(e.target.value);
          newHandler(e.target.value);
        }}
      />
    </div>
  );
}
export default App;