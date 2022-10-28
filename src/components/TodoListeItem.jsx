import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import todoContext from "../contexts/TodoContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
function TodoListeItem(todo) {
  const { markTodoCompleted, markTodoUncompeted, deleteTodo, isLoading } =
    React.useContext(todoContext);

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTodo(todo.todo.id);
  };
  const handleToggle = () => {
    if (todo.todo.completed) {
      markTodoUncompeted(todo.todo.id);
    } else {
      markTodoCompleted(todo.todo.id);
    }
  };
  return (
    <>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <ListItem
          key={todo.todo.id}
          secondaryAction={
            <IconButton edge="end" aria-label="close" onClick={handleDelete}>
              <CloseIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.todo.completed}
                //tabIndex={-1}
                inputProps={{ "aria-labelledby": todo.labelId }}
                onClick={handleToggle}
              />
            </ListItemIcon>
            <ListItemText id={todo.labelId} primary={todo.todo.title} />
          </ListItemButton>
        </ListItem>
      )}
    </>
  );
}

export default TodoListeItem;
