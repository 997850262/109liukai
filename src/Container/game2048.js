import React from 'react';
import { connect } from 'react-redux';
import * as todoActionCreators from '../actions/index';
/* eslint-disable */
import { bindActionCreators } from 'redux';
import Head from '../component/Game/Head';
import Gamearea from '../component/Game/Gamearea';


class game2048 extends React.Component {
    componentDidMount=()=>{

    }
    initialize=()=>{//初始化
        const {data}=this.props;
        let num=Math.floor(Math.random()*(4-2+1)+2);
        let num2=Math.floor(Math.random()*(4-2+1)+2);
        let hang=Math.floor(Math.random()*(3-0+1)+0);
        let hang2=Math.floor(Math.random()*(3-0+1)+0);
        let lie=Math.floor(Math.random()*(3-0+1)+0);
        let lie2=Math.floor(Math.random()*(3-0+1)+0);
        console.log(num)
        console.log(num2)
        console.log('行',hang)
        console.log('列',lie)
        console.log('行',hang2)
        console.log('列',lie2)
        if(hang2==hang&&lie2==lie)
        {
            hang2=hang2-1;
        }
        if(num>3){
            num=4;
        console.log(num)
        }
        else{
            num=2;
            console.log(num)
        }
        if(num2>=3){
            num2=4;
        }
        else{
            num2=2;
        }
        data[hang][lie]=num;
        data[hang2][lie2]=num2;
        console.log(data)
    }

  render() {
    const{data,todoActions}=this.props;
    return (
      <div>
        {this.initialize()}
        <Head data={data} todoActions={todoActions}/>
        <Gamearea data={data} todoActions={todoActions}/>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  const { game } = state;
  console.log(game.game)
  const data=game.game.data;
  console.log(data)
  return { data };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(game2048);
