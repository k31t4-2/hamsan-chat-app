// import React from 'react'
// import * as ReactDOM from 'react-dom'

// import App from './App.jsx'
// import './index.css'

// const rootElement = document.getElementById('root');

// ReactDOM.render(<App />, rootElement);

// React 17 以前
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

// React 18 での新しい方法

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
