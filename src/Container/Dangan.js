import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as todoActionCreators from '../actions/axiosactions'
import { bindActionCreators } from 'redux';
import './Op.css';
import * as api from '../api/index';
import ButtoxBox from '../Components/Dangan/ButtonBox';
import ListView from '../Components/Dangan/ListView';
 class Dangan extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const{todoActions}=this.props;
    const mid='';
    todoActions.fetchdangan(mid);
  }
  render() {
    const{todoActions,DListView,state}=this.props;
    return (
        <div className="Main">
          <div>
          <ButtoxBox todoActions={todoActions} DListView={DListView} state={state}/>
          </div>
          <div>
          <ListView todoActions={todoActions} DListView={DListView} state={state}/>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state,ownProps){
   const{DListView}=state;
   return {DListView}
}

function mapDispatchToProps(dispatch){
  return{
    todoActions:bindActionCreators(todoActionCreators, dispatch)
    // dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dangan);

