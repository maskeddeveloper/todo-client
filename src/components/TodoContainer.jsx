import * as React from "react";
import TodoHeader from "./TodoHeader";
import TodoAdd from "./TodoAdd";
import TodoListe from "./TodoListe";
import TodoFilter from "./TodoFilter";
import Grid from "@material-ui/core/grid";
import { makeStyles } from "@mui/styles";

function TodoContainer() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3} className={classes.root}>
          <TodoHeader />
          <TodoAdd />
          <TodoListe />
          <TodoFilter />
        </Grid>
      </Grid>
    </>
  );
}
const useStyles = makeStyles({
  root: {
    width: "440px",
    height: "437px",
    padding: "35px 30px",
    borderRadius: "5px",
    boxShadow: "0 2px 16px 0 rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
});
export default TodoContainer;
