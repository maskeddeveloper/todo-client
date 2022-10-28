import * as React from "react";
import TodoContainer from "./components/TodoContainer";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { TodoProvider } from "./contexts/TodoContext";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <TodoProvider>
      <div className="App">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <TodoContainer />
      </div>
    </TodoProvider>
  );
}

export default App;
