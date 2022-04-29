import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './components/counter';

ReactDOM.render( <Counter btn="click mee!" alertState="hey i'm back from Propsy" >
    <h4>IM head 4 from the parent passed as argu</h4>
</Counter>
, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 