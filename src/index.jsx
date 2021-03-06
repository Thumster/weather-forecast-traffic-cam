import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/Home/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContextProvider } from "./contexts/AppContext";

ReactDOM.render(
    <React.StrictMode>
        <AppContextProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </AppContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
