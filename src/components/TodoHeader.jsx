import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@material-ui/core/grid";
import { makeStyles } from "@mui/styles";
const TodoHeader = () => {
  const classes = useStyles();
  return (
    <>
      <Grid md sm xs container>
        <Grid item md={12} sm={12} xs={12}>
          <img src={`/icons/group.svg`} alt={"Todo App Logo"} loading="lazy" />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Typography variant="h1" component="h1" className={classes.appTitle}>
            Todo List
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
const useStyles = makeStyles({
  appTitle: {
    fontSize: "22px !important",
    fontWeight: "bold !important",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal !important",
    letterSpacing: "normal !important",
    textAlign: "left",
    color: "#1f2a4b",
    marginTop: "1rem !important",
  },
});
export default TodoHeader;
