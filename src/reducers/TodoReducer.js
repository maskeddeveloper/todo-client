export const Action = {
  ADD_TODO: "add-todo",
  REMOVE_TODO: "remove-todo",
  MARK_TODO_COMPLETED: "mark-todo-completed",
  MARK_TODO_UNCOMPLETED: "mark-todo-uncompleted",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case Action.ADD_TODO: {
      return [...state, action.todo];
    }

    case Action.REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    default:
      return state;
  }
};
