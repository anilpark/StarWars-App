import './App.css'

import Planets from '../Planets'
import React from 'react'
import {Provider} from "react-redux";
import store from "../../redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Star Wars Planets</h1>
        <Planets />
      </div>
    </Provider>

  );
}

export default App;