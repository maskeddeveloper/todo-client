import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { showToast } from "../utils/toast";
const TodoContext = createContext();
// eslint-disable-next-line react/prop-types
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const deleteTodo = (todoId) => {
    setIsLoading(true);
    axios
      .delete(`http://localhost:3030/deleteTodo/${todoId}`)
      .then(function (response) {
        // handle success
        console.log(response);
        showToast("todo has been deleted successfully!");
        showAllTodos();
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        showToast(error.message);
        setIsLoading(false);
      });
  };
  const markTodoCompleted = (todoId) => {
    setIsLoading(true);
    axios
      .put(`http://localhost:3030/markTodoCompleted/${todoId}`)
      .then(function (response) {
        // handle success
        console.log(response);
        showToast("todo marked completed!");
        showAllTodos();
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        showToast(error.message);
        setIsLoading(false);
      });
  };
  const markTodoUncompeted = (todoId) => {
    setIsLoading(true);
    axios
      .put(`http://localhost:3030/markTodoUncompleted/${todoId}`)
      .then(function (response) {
        // handle success
        console.log(response);
        showToast("todo marked uncompleted!");
        showAllTodos();
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        showToast(error.message);
        setIsLoading(false);
      });
  };
  const showAllTodos = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3030/listTodos")
      .then(function (response) {
        // handle success

        const todos = response.data.sort((a, b) => b.id - a.id);
        setTodos(todos);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        showToast(error.message);
        setIsLoading(false);
      });
  };
  const addTodo = (title) => {
    setIsLoading(true);
    axios
      .post("http://localhost:3030/createTodo", {
        title: title,
        completed: false,
      })
      .then(function (response) {
        console.log(response);
        showToast("todo has been added successfully!");
        showAllTodos();
        setIsLoading(false);
      })
      .catch(function (error) {
        showToast(error.message);
        setIsLoading(false);
      });
  };
  const showCompletedTodos = async () => {
    //showAllTodos();
    const allCompletedTodos = todos.filter((todo) => todo.completed === true);
    setTodos(allCompletedTodos);
  };
  const showUnCompletedTodos = () => {
    //setTodos([]);
    //showAllTodos();
    const allUnCompletedTodos = todos.filter(
      (todo) => todo.completed === false
    );
    setTodos(allUnCompletedTodos);
  };
  useEffect(() => {
    showAllTodos();
  }, []);
  return (
    <TodoContext.Provider
      value={{
        todos,
        deleteTodo,
        markTodoCompleted,
        markTodoUncompeted,
        showAllTodos,
        addTodo,
        isLoading,
        showCompletedTodos,
        showUnCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;
