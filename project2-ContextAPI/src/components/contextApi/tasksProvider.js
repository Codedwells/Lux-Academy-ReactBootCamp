import React, { createContext, useReducer } from "react";
import taskReducer, { TASKS_INITIAL_STATE } from "./tasksReduce";

export const TasksContext = createContext({
  ...TASKS_INITIAL_STATE,
});

const TaskProvider = ({ children }) => {
  const [store, dispatch] = useReducer(taskReducer, TASKS_INITIAL_STATE);
  const { tasks } = store;

  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const removeTasks = (id) => {
    let updatedTasks = tasks.filter((curr) => curr.id !== id);

    dispatch({
      type: "REMOVE_TASK",
      payload: updatedTasks,
    });
  };

  const value = {
    tasks,
    addTask,
    removeTasks,
  };
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export default TaskProvider;
