import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import loadable from '@loadable/component';

const StickyContents = loadable(() => import(/* webpackChunkName: "StickyContents" */ './pages/StickyContents'));
const FullPageScroll = loadable(() => import(/* webpackChunkName: "FullPageScroll" */ './pages/FullPageScroll'));

const Navigation: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/sticky-contents">Sticky Contents</Link>
          </li>
          <li>
            <Link to="/full-page-scroll">Full Page Scroll</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Navigation} />
          <Route exact path='/sticky-contents' component={StickyContents} />
          <Route exact path='/full-page-scroll' component={FullPageScroll} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
};


ReactDOM.render(<App />, document.querySelector('#root'));
