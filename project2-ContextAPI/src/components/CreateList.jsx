import React from "react";
import { useState, useContext } from "react";
import { TasksContext } from "./contextApi/tasksProvider";

const CreateList = () => {
  const { addTask } = useContext(TasksContext);
  const [taskTitle, setTaskTitle] = useState(" ");

  const handleInput = (e) => {
    setTaskTitle(e.target.value);
  };
  const handleCreateTask = (e) => {
    let id = Math.ceil(Math.random() * 100000000);
    const newTask = {
      title: taskTitle,
      id: id,
    };
    addTask(newTask);
  };
  return (
    <div>
      <div className="inputWrapper">
        <input
          type="text"
          name="list"
          placeholder="Create Task"
          onChange={handleInput}
        />
        <button type="button" onClick={handleCreateTask}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateList;
