import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as todoActionCreators from '../actions/axiosactions'
import { bindActionCreators } from 'redux';
import './Dclass.css';
import * as api from '../api/index';
import Header from '../Components/Dclass/Header';
import ListView from '../Components/Dclass/ListView';
 class Dclass extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const{todoActions}=this.props;
    const id=this.props.params.id;
    todoActions.fetchclass(id);
  }
  render() {
    const{todoActions,DclassView,state}=this.props;
    return (
        <div className="Main">
          <div>
          <Header todoActions={todoActions} DclassView={DclassView} state={state}/>
          </div>
          <div>
          <ListView todoActions={todoActions} DclassView={DclassView} state={state}/>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state,ownProps){
   const{DclassView}=state;
   return {DclassView}
}

function mapDispatchToProps(dispatch){
  return{
    todoActions:bindActionCreators(todoActionCreators, dispatch)
    // dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dclass);

