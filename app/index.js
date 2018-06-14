import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.less';
import MRouter from '../app/routes/index';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <MRouter />, document.getElementById('root')
);
registerServiceWorker();