import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../actions/index';
import Head from '../component/Game/Head';
import Gamearea from '../component/Game/Gamearea';


class game2048 extends React.Component {
    componentDidMount=() => {
      window.addEventListener('keydown', this.handleKeyDown);
    }
/* eslint-disable */
    initialize=() => { // 初始化
      const { data, isinitialize, todoActions } = this.props;
      let m = 0;
      console.log(isinitialize);
      let num = Math.floor(Math.random() * (4 - 2 + 1) + 2);
      const hang = Math.floor(Math.random() * (3 - 0 + 1) + 0);
      const lie = Math.floor(Math.random() * (3 - 0 + 1) + 0);
      if (data[hang][lie] > 0) {
        console.log('重新随机');
        data.map((n, hang) => n.map((num, lie) => {
          if (data[hang][lie] == 0) {
            m++;
          }
        }));
        if(m>0)
        {
          this.initialize();
        }
        else{alert('game over')}
      } else if (data[hang][lie] == 0) {
        if (num > 3) {
          num = 4;
          console.log(num);
        } else {
          num = 2;
          console.log(num);
        }
        data[hang][lie] = num;
      }
      if (isinitialize == true) {
        todoActions.initialize();
      }
      console.log(data);
    }

    handleKeyDown=event => {
      const { todoActions } = this.props;
      switch (event.keyCode) {
        case 87:
          todoActions.upward();
          break;
        case 65:
          todoActions.leftward();
          break;
        case 83:
          todoActions.downward();
          break;
        case 68:
          todoActions.rightward();
          break;
        default:
          break;
      }
    }
    render() {
      const { data,Score,bestScore, todoActions} = this.props;
      let {color}=this.props
      this.initialize();
      return (
        <div>
          <Head data={data} Score={Score} bestScore={bestScore} todoActions={todoActions} />
          <Gamearea data={data} color={color} todoActions={todoActions} />
        </div>
      );
    }
}
/* eslint-disable */
function mapStateToProps(state) {
  const { game } = state;
  console.log(game.game);
  const data = game.game.data;
  const isinitialize = game.game.isinitialize;
  const Score = game.game.Score;
  const bestScore = game.game.bestScore;
  let color=game.game.color;
  // console.log(game.game.isinitialize);
  // console.log(color);
  return { data, isinitialize,Score,bestScore,color };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(game2048);
