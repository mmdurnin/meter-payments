import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import Root from './components/Root';
import configureStore from "./store/store";
import * as serviceWorker from './serviceWorker';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");
    console.log(process.env.NODE_ENV)

    ReactDOM.render(<Root store={store} />, root);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


