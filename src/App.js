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

const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(serverApi,logger),
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
        {/* <Op /> */}
        <Dangan />
        {/* <Dclass /> */}
        </Provider>
      </div>
    );
  }
}
//export default App;
