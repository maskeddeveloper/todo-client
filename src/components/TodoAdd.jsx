import * as React from "react";
import Grid from "@material-ui/core/grid";
import { FormControl, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import todoContext from "../contexts/TodoContext";
import { showToast } from "../utils/toast";

function TodoAdd() {
  const [error, setError] = React.useState(false);
  const { addTodo } = React.useContext(todoContext);
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value.trim().length !== 0) {
        addTodo(e.target.value);
        e.target.value = "";
        setError(false);
      } else {
        setError(true);
        showToast("Field is empty!");
      }
    }
  };
  const classes = useStyles();
  return (
    <>
      <Grid md={12} sm={12} xs={12} item>
        <FormControl className={classes.textField}>
          <TextField
            error={error}
            id="addTodo"
            label="Add a new todo"
            variant="standard"
            onKeyDown={handleKeyDown}
          />
        </FormControl>
      </Grid>
    </>
  );
}
const useStyles = makeStyles({
  textField: {
    width: "100%",
  },
});

export default TodoAdd;
