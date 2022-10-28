import * as React from "react";
import List from "@mui/material/List";
import TodoListeItem from "./TodoListeItem";
import todoContext from "../contexts/TodoContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
function TodoListe() {
  const { todos, isLoading } = React.useContext(todoContext);
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {todos.map((todo) => {
              const labelId = `checkbox-list-label-${todo.id}`;

              return (
                <TodoListeItem key={todo.id} todo={todo} labelId={labelId} />
              );
            })}
          </>
        )}
      </List>
    </>
  );
}

export default TodoListe;
