import { Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ParticlesComponent from "../../components/Particles";
const useStyles = makeStyles(() => ({
  root: {
    background: "linear-gradient(to right, #00c6fb 0%, #005bea 100%)",
    height: "100vh",
    display: "flex",
  },
}));
export const HomeUpperArea = () => {
  let classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      className={classes.root}
      sx={(theme: Theme) => ({
        background: theme.palette.background.paper,
      })}
    >
      <ParticlesComponent />
    </Grid>
  );
};
