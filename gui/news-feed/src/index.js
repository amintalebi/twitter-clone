import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import 'materialize-css/dist/css/materialize.min.css'

<<<<<<< HEAD



const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
=======
ReactDOM.render(<Blog />, document.getElementById('root'));
>>>>>>> parent of 939b5b7... package marked added and used in blog.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


