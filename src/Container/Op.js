import React, { Component } from 'react';
import Head from '../Components/Op/Head.js';
import Tab from '../Components/Op/Tab.js';
// import ButtonBox from '../Components/Op/ButtonBox.js';
// import ListView from '../Components/Op/ListView.js';
import './Op.css';
import { connect } from 'react-redux'
import * as todoActionCreators from '../actions'
import { bindActionCreators } from 'redux';
 import * as api from '../api/index';

 class Op extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    console.log('componentDidMount');
    const{dispatch}=this.props;
    api.getuser(dispatch);
    api.getlesson(dispatch);
  }
  render() {
    const{dispatch,Authormessages,List,state}=this.props;
    return (
        <div className="Main">
          <div>
          <Head dispatch={dispatch} Authormessages={Authormessages} state={state}/>
          </div>
          <div>
          <Tab dispatch={dispatch} List={List} state={state}/>
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
    // todoActions:bindActionCreators(todoActionCreators, dispatch)
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Op);

