import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hasgHistory} from "react-router";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
