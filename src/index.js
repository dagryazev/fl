import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Configuration from './component/configuration/'
import Messages from "./component/messages/";
import Tasks from "./component/tasks/";


ReactDOM.render(<Configuration />, document.getElementById('configuration'));
ReactDOM.render(<Messages />, document.getElementById('messages'));
ReactDOM.render(<Tasks ref={(Configuration) => {window.Configuration = Configuration}} />, document.getElementById('tasks'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
