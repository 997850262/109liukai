import React from 'react';
// import MessageItemView from './MessageItem.js';
// import DialogView from './DialogView.js';
// import HeaderView from './HeaderView.js';
// import Blank from './Blank.js';
import Todo from './Container/Todo.js';
// import ListItem from './Container/ListItem.js';
import './App.css';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducers'
import { createLogger } from 'redux-logger';
const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
  )
)

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Provider store={store}>
        <Todo />
        {/* <ListItem /> */}
        </Provider>
      </div>
    );
  }
}
//export default App;
