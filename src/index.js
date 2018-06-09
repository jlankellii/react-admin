import React from 'react';
import ReactDOM from 'react-dom';
import SiderDemo from './components/Navi/Navi'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<SiderDemo />, document.getElementById('root'));
registerServiceWorker();