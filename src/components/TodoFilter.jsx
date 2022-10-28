import * as React from "react";
import Grid from "@material-ui/core/grid";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import todoContext from "../contexts/TodoContext";

function TodoFilter() {
  const { showCompletedTodos, showUnCompletedTodos, showAllTodos } =
    React.useContext(todoContext);
  const [link, setLink] = React.useState({
    all: true,
    completed: false,
    uncompleted: false,
  });

  const classes = useStyles();
  const showTodos = () => {
    setLink({
      all: true,
      completed: false,
      uncompleted: false,
    });
    showAllTodos();
  };
  const showCompleted = () => {
    setLink({
      all: false,
      completed: true,
      uncompleted: false,
    });
    showCompletedTodos();
  };
  const showIncompleted = () => {
    setLink({
      all: false,
      completed: false,
      uncompleted: true,
    });
    showUnCompletedTodos();
  };
  return (
    <>
      <Grid
        md={12}
        sm={12}
        xs={12}
        justifyContent={"space-between"}
        container
        item
      >
        <Typography variant="body2" component="span" className={classes.show}>
          Show:
        </Typography>
        <Link
          href="#"
          onClick={showTodos}
          className={`${classes.link} ${link.all ? classes.disabledLink : ""}`}
        >
          All
        </Link>
        <Link
          href="#"
          onClick={showCompleted}
          className={`${classes.link} ${
            link.completed ? classes.disabledLink : ""
          }`}
        >
          Completed
        </Link>
        <Link
          href="#"
          onClick={showIncompleted}
          className={`${classes.link} ${
            link.uncompleted ? classes.disabledLink : ""
          }`}
        >
          Incompleted
        </Link>
      </Grid>
    </>
  );
}
const useStyles = makeStyles({
  show: {
    fontSize: "14px !important",
    fontWeight: "500 !important",
    color: "rgba(31, 42, 75, 0.59)",
  },
  disabledLink: {
    color: "#1f2a4b !important",
    textDecoration: "none !important",
    pointerEvents: "none",
  },
  link: {
    fontSize: "14px !important",
    fontWeight: "500 !important",
  },
});
export default TodoFilter;
