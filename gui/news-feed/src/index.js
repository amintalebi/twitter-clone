import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import 'materialize-css/dist/css/materialize.min.css'
<<<<<<< HEAD

<<<<<<< HEAD

=======
import M from 'materialize-css';
>>>>>>> parent of 41877e1... style folder added,


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
=======
ReactDOM.render(<Blog />, document.getElementById('root'));
>>>>>>> parent of 939b5b7... package marked added and used in blog.
=======

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> parent of b972d03... Posts added,
=======

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> parent of b972d03... Posts added,

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
