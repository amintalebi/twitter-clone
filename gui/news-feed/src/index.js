import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme} from "@material-ui/core/styles";
import {faIR} from "@material-ui/core/locale";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 600,
            sm: 988,
            md: 1008,
            lg: 1078,
            xl: 1265,
        }
    },
    palette: {//primary and secondary(twitter blue) are same and tertiary(twitter gary) is different
        primary: {
            light: 'rgba(29, 161, 242, 0.1)',
            main: 'rgb(29, 161, 242)',
            dark: 'rgb(0, 115, 198)',
            contrastText: '#000000',
        },
        secondary: {
            light: 'rgba(29, 161, 242, 0.1)',
            main: 'rgb(29, 161, 242)',
            dark: 'rgb(0, 115, 198)',
            contrastText: '#000000',
        },
        tertiary: {
            light: 'rgb(245, 248, 250)',
            main: 'rgb(230, 236, 240)',
            dark: 'rgb(91, 100, 106)',
            contrastText: 'rgb(101, 119, 134)',
        }
    },
    direction: 'rtl',
}, faIR);

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store} >
            <App />
        </Provider>
    </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
