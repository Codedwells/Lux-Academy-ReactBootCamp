import { useState, useContext } from "react";
import CreateList from "./components/CreateList";
import DisplayList from "./components/DisplayList";
import "./App.css";
import TaskProvider from "./components/contextApi/tasksProvider";

const App = () => {
  return (
    <div className="App">
      <TaskProvider>
        <CreateList />
        <DisplayList />
      </TaskProvider>
    </div>
  );
};

export default App;
