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
    const{todoActions,entities,data}=this.props;
    console.log(entities,data)
    return (
        <div className="all">
            <div className="PowerComment">
            <PowerComment 
            todoActions={todoActions}
            entities={entities}
            data={data}
             isActive={this.state.isActive}
             openitem={this.openitem}
             />
            </div>
            <div className="PowerItem">
            <PowerItem 
            todoActions={todoActions}
            entities={entities}
            data={data}
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
   const entities=Power.Power;
   const data=Power.data;
   console.log(Power)
   console.log(entities)
   console.log(data)
   return {entities,data}
}

function mapDispatchToProps(dispatch){
  return{
    todoActions:bindActionCreators(todoActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Power);

