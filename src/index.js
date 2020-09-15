import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NavBar } from './component/NavBar.js';
import { MarkdownPane } from './component/MarkdownPane.js';
import * as serviceWorker from './serviceWorker';

const input = require("./content/markdown.md");

ReactDOM.render(
  <React.StrictMode>
      <NavBar />
      <MarkdownPane input={input}/>
      {/*<App />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
