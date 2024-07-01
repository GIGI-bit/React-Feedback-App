/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Statistics from "./components/Statics";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <div>
        <Statistics /> <Notification />
      </div>
    </>
  );
}

export default App;
