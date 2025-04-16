import React from "react";
import { Provider } from "react-redux";
import { store } from "./Baitap/CounterRedux/src/redux/store";
import CounterRedux from "./Baitap/CounterRedux/src/CounterRedux";
import CounterReducer from "./Baitap/CounterReducer/CounterReducer";
import stores from "./Baitap/CounterReduxToolkit/store";

import "./App.css";
import CounterReduxToolkit from "./Baitap/CounterReduxToolkit/CounterReduxToolkit";

function App() {
  return (
    <>
      {/* <CounterReducer /> */}
      {/* <Provider store={store}>
        <CounterRedux />
      </Provider> */}
      <Provider store={stores}>
        <CounterReduxToolkit />
      </Provider>
    </>
  );
}

export default App;
