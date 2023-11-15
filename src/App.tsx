import { useContext, useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import UserInfoContext from "./main";
import useLocalStorage from "./useLocalStorage"

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const userInfo = useContext(UserInfoContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello useEffect");
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offsetTop);
  };

  //カスタムフック
  const [age, setAge] = useLocalStorage("age", 25)

  return (
    <div>
      <h1>useState, useEffect</h1>
      <button onClick={() => handleClick()}>＋</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{userInfo.name}</p>
      <p>{userInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>カウント : {state}</p>
      <button onClick={() => dispatch({ type: "increment"})}>＋</button>
      <button onClick={() => dispatch({ type: "decrement"})}>ー</button>

      <hr />
      <h1>カスタムフック</h1>
      <p>{age}</p>
      <button onClick={() => setAge(36)}>年齢をセット</button>
    </div>
  );
}

export default App;
