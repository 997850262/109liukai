import React from 'react';
import Op from './Container/Op';
import './App.css';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducers'
import { createLogger } from 'redux-logger';
import axios from 'axios';
import serverApi from './middleware/serverApi';
import Dangan from './Container/Dangan';
import Dclass from './Container/Dclass';
import { Router, browserHistory} from 'react-router';

const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(serverApi,logger),
  )
)
const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: Dangan },
  childRoutes: [
    { path: 'Dangan', component: Dangan },
    { path: 'Op/:mid', component: Op },
    { path: 'Dclass/:id', component: Dclass }
  ]
}]
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        {/* <Op /> */}
        {/* <Dangan /> */}
        {/* <Dclass /> */}
        <Router routes={routes} history={browserHistory}/>
        </Provider>
      </div>
    );
  }
}
//export default App;
