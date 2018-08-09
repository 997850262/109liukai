import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as todoActionCreators from '../actions/index'
import { bindActionCreators } from 'redux';
import Head from '../component/Head/Head'
import Topbar from '../component/Topbar/Topbar'
import './Homework.css'


 class Homework extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const{todoActions,router,entities,homework}=this.props;
    return (
        <div className="Main">
          <div>
          <Head todoActions={todoActions} router={router} entities={entities} homework={homework}/>
          </div>
          <div>
          <Topbar todoActions={todoActions}  router={router} entities={entities} homework={homework}/>
          </div>

        </div>
    );
  }
}

function mapStateToProps(state,ownProps){
   const{homework,entities}=state;
   console.log(homework)
   console.log(entities)
   return {homework,
    entities}
}

function mapDispatchToProps(dispatch){
  return{
    todoActions:bindActionCreators(todoActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Homework);

