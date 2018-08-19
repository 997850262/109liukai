import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../actions/index';
import Head from '../component/Game/Head';
import Gamearea from '../component/Game/Gamearea';

/* eslint-disable */
class game2048 extends React.Component {
    componentDidMount=() => {
      window.addEventListener('keydown', this.handleKeyDown);
    }

    initialize=() => { // 初始化
      const { data, isinitialize, todoActions,slide } = this.props;
      let gameover=false;
      data.map((n, hang) => n.map((num, lie) => {
        if (data[hang][lie] == 2048){
          alert('游戏结束');
          gameover=true
        }
      }))
      if(slide==true&&gameover==false){
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
          if (m > 0) {
            this.initialize();
          } else { alert('换条路试试?'); }//,进不来,此时滑块必定为flase
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
        if (isinitialize == true) {//是否初始化
          todoActions.initialize();
        }
        else todoActions.random();
        console.log(data);
      } 
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
      const {
        data, Score, bestScore, todoActions,slide
      } = this.props;
      const { color } = this.props;
      this.initialize();
      return (
        <div>
          <Head data={data} Score={Score} bestScore={bestScore} todoActions={todoActions} />
          <Gamearea data={data} color={color} todoActions={todoActions} />
        </div>
      );
    }
}

function mapStateToProps(state) {
  const { game } = state;
  console.log(game.game);
  const data = game.game.data;
  const isinitialize = game.game.isinitialize;
  const Score = game.game.Score;
  const bestScore = game.game.bestScore;
  const color = game.game.color;
  const slide = game.game.slide;
  console.log(game.game.slide);
  // console.log(color);
  return {
    data, isinitialize, Score, bestScore, color,slide
  };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(game2048);
