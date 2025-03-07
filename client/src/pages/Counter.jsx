import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContainerWrapper } from "../components/ContainerWrapper.styled";
import { counterReducer } from "../reducer/counterReducer";
// import { data } from "react-router-dom";

export const Counter = () => {
  // const [state, setState] = useState({ count: 0, history: [] });
  const [history, setHistory] = useState([]); // history 따로 만들면 편함
  const [state, setState] = useState({ count: 0 });

  // 날짜도 복사해서 넣어, 배열로 가져와 순회 돌려서 뿌려
  useEffect(() => {
    const getCounter = async () => {
      const { data } = await axios.get("http://localhost:3005/counter");
      console.log("data", data);
      setState({
        ...state,
        count: data.value.value,
        // history: [{ time: data.value.createdAt }],
      });
    };
    getCounter();
  }, []);

  const handleDispatch = async (action) => {
    console.log("state", state);
    try {
      const newValue = counterReducer(state, action);
      console.log("newValue", newValue);
      console.log("handleDispatch", state);
      await axios.post("http://localhost:3005/counter", { newValue: newValue });
      setState({ ...state, count: newValue }); // history: [...state.history, time : ]
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerWrapper>
      <h1>Count : {state.count}</h1>
      <div>
        <div className="count-box">
          <button onClick={() => handleDispatch("INCREMENT")}>+</button>
          <button onClick={() => handleDispatch("DECREMENT")}>-</button>
          <button onClick={() => handleDispatch("RESET")}>RESET</button>
        </div>
        <div className="history-box">
          <ul>{/* <li>{state.history}</li> */}</ul>
        </div>
      </div>
    </ContainerWrapper>
  );
};
