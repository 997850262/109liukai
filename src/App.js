import React from 'react';
// import MessageItemView from './MessageItem.js';
// import DialogView from './DialogView.js';
// import HeaderView from './HeaderView.js';
// import Blank from './Blank.js';
//import Todo from './Container/Todo.js';
import ListItem from './Container/ListItem.js';
import './App.css';


class App extends React.Component {

  

  render() {
    return (
      <div>
        {/* <Todo /> */}
        <ListItem />
      </div>
    );
  }
}
export default App;
