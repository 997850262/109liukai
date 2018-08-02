import React, { Component } from 'react';
import Head from '../Components/Op/Head.js';
import Tab from '../Components/Op/Tab.js';
// import ButtonBox from '../Components/Op/ButtonBox.js';
// import ListView from '../Components/Op/ListView.js';
import './Op.css';
import { connect } from 'react-redux'
import * as todoActionCreators from '../actions/axiosactions'
import { bindActionCreators } from 'redux';
 import * as api from '../api/index';

 class Op extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const{todoActions}=this.props;
    const mid='MID330900002';
    todoActions.fetchuser(mid);
    todoActions.fetchlesson(mid);
    todoActions.fetchSatisfaction(mid);
  }
  render() {
    const{todoActions,Authormessages,List,state,router}=this.props;
    return (
        <div className="Main">
          <div>
          <Head todoActions={todoActions} Authormessages={Authormessages} state={state} router={router}/>
          </div>
          <div>
          <Tab todoActions={todoActions} List={List} state={state} router={router}/>
          </div>
          {/* <div>
          <ButtonBox todoActions={todoActions}/>
          </div> */}
          {/* <div>
          <ListView todoActions={todoActions} List={List} state={state}/>
          </div> */}
        </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  const{Authormessages,List}=state;
  return {Authormessages,List}
}

function mapDispatchToProps(dispatch){
  return{
    todoActions:bindActionCreators(todoActionCreators, dispatch)
    // dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Op);

