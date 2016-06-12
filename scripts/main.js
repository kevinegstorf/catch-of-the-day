var React = require('react');
var ReactDOM = require('react-dom');
var CSSTransitionGroup = require('react-addons-css-transition-group');

var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers');

// Firebase
var Rebase = require('re-base');
var base = Rebase.createClass('https://resplendent-fire-6859.firebaseio.com/');

var Catalyst = require('react-catalyst');

/*
  Import Components
*/

import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';
import Order from './components/Order';
import Inventory from './components/Inventory';
import Header from './components/Header';
import Fish from './components/Fish';
import App from './components/App';
import AddFishForm from './components/AddFishForm';


/*
  Routes
*/

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
