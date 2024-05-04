import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { DashBoard } from "./dashboard/dashboard";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export const App = () => (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DashBoard/>
    </ThemeProvider>
)