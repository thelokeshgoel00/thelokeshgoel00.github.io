import React from "react";
import { HomeUpperArea } from "./HomeUpperArea";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeUpperArea />
    </ThemeProvider>
  );
};
