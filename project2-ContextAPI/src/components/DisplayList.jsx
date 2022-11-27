import React, { useContext } from "react";
import { TasksContext } from "./contextApi/tasksProvider";

const DisplayList = () => {
  const { tasks, removeTasks } = useContext(TasksContext);
  console.log(tasks);

  const handleDelete = (id) => {
    removeTasks(id);
  };

  return (
    <>
      <div className="displayWrapper">
        {tasks.map((item) => {
          let { title, id } = item;
          return (
            <div className="taskWrapper">
              <input type="checkbox" />
              <span>{title}</span>
              <span
                style={{
                  cursor: "pointer",
                }}
                onClick={() => handleDelete(id)}
              >
                delete
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DisplayList;
