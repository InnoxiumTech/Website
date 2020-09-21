import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { NavBar } from './component/NavBar.js';
import MarkdownPane from './component/MarkdownPane.js';
import * as serviceWorker from './serviceWorker';
import navItems from './content/NavItems.json'

const input = require("./content/markdown.md");

const routes = navItems.map((item, index) => (
    getRouteFromItem(item, index))
)

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div className={"navBarDiv"}>
              <NavBar />
          </div>
          <Switch>
              {routes}
          </Switch>
      </Router>
      {/*<App />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

function getRouteFromItem(item, index) {

    const isMarkdown = item.markdownPage;
    let content = null;
    if (isMarkdown) content = require("./" + item.markdownContent);
    let component = isMarkdown ? () => <MarkdownPane input={content}/> : () => <MarkdownPane input={input}/>

    return (<Route key={index} exact path={"/" + item.page} component = {component}/>)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
