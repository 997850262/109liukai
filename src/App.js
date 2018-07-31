import React from 'react';
// import Todo from './Container/Todo.js';
import Op from './Container/Op';
import './App.css';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from './reducers'
import { createLogger } from 'redux-logger';
import axios from 'axios';

const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
  )
)

export default class App extends React.Component {
  // componentDidMount(){
  //   axios({
  //     //headers:{'Content-Type':'application/x-www-form-urlencoded'},
  //     method:"POST",
  //     url:"http://xly-wkop.xiaoniangao.cn/getUserInfo" ,
      
  //     }).then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //   })
  // }
  render() {
    return (
      <div>
        <Provider store={store}>
        {/* <Todo /> */}
        {/* <ListItem /> */}
        <Op />
        </Provider>
      </div>
    );
  }
}
//export default App;
