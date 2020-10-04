import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavBar from './component/NavBar.js';
import MarkdownPane from './component/MarkdownPane.js';
import Footer from "./component/Footer.js"
import * as serviceWorker from './serviceWorker';
import navItems from './content/NavItems.json'

// const input = require("./content/markdown.md");

const routes = navItems.map((item, index) => (
    getRouteFromItem(item, index))
)

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Suspense fallback={<p>Loading...</p>}>
              <NavBar />
              <Switch>
                  {routes}
              </Switch>
              <Footer />
          </Suspense>
      </Router>
      {/*<App />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// Gets all routes from our valid json file
function getRouteFromItem(item, index) {

    // Is the page a markdown page?
    const isMarkdown = item.markdownPage;
    // init variables
    let content = null;
    let Page = null; // Page is a component, not a standard variable
    let component;
    if (isMarkdown) {
        // import the markdown page
        content = require("./" + item.markdownContent);
        component = () => <MarkdownPane input={content}/>;
    } else if(item.isOutLink) {

        component = () => {
            window.location.href = item.outLink
            return null
        }
    } else {
        // Or import the page as a component
        Page = React.lazy(() => import("./" + item.pageContentComponent));
        component = () => <Suspense fallback={<p>Loading...</p>}><Page/></Suspense>;
    }
    // Define the component

    // Return our route
    return (<Route key={index} exact path={"/" + item.page} component = {component}/>)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
