import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as todoActionCreators from '../actions/index'
import { bindActionCreators } from 'redux';
import PowerComment from '../component/Power/PowerComment'
import PowerItem from '../component/Power/PowerItem'
import './Power.css'


 class Power extends Component {
  constructor(props){
    super(props);
    this.state={
      isActive:false
    }
  }
  openitem=()=>{
    this.setState({
      isActive: true      
    });
  }
  closeitem=()=>{
    this.setState({
      isActive: false      
    });
  }
  render() {
    const{todoActions,router,Power}=this.props;
    console.log(Power)
    return (
        <div className="all">
            <div className="PowerComment">
            <PowerComment 
            todoActions={todoActions}
             Power={Power}
             isActive={this.state.isActive}
             openitem={this.openitem}
             />
            </div>
            <div className="PowerItem">
            <PowerItem 
            todoActions={todoActions}
             Power={Power}
             isActive={this.state.isActive}
             closeitem={this.closeitem}
             />
            </div>
        </div>
    );
  }
}

function mapStateToProps(state,ownProps){
   const{Power}=state;
   console.log(Power)
   return {Power}
}

function mapDispatchToProps(dispatch){
  return{
    todoActions:bindActionCreators(todoActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Power);

