import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';

//ReactDOM.render(<App />, root);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App/>)
