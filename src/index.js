import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const render = function() {
    console.log(store.getState())
    ReactDOM.render(<App />, document.getElementById('root'));
}
render();
store.subscribe(render);

registerServiceWorker();
