import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.less';
import MRouter from './routes/index';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <MRouter />, document.getElementById('root')
);
registerServiceWorker();