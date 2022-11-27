export const TASKS_INITIAL_STATE = {
  tasks: [
    { title: "Watch world cup", id: "2" },
    { title: "Go shopping", id: "3" },
    { title: "Play football", id: "4" },
  ],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
};

export default taskReducer;
