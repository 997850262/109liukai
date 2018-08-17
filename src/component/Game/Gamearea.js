import React, { Component } from 'react';
import './Game.css';

// const KEY_RETURN = [87,65,83,68];//W A S D
export default class Gamearea extends Component {
  // constructor(props) {
  //   super(props);
  // }

  onTouchStart=event => {
    console.log(event);
    console.log(event.touches);
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
    console.log('1111111111111', this.startX);
    console.log('1111111111111', this.startY);
  }
  onTouchEnd=event => {
    const { todoActions } = this.props;
    console.log(event.changedTouches);
    this.endX = event.changedTouches[0].clientX;
    this.endY = event.changedTouches[0].clientY;
    console.log('22222222', this.endX);
    console.log('22222222', this.endY);
    const x = this.endX - this.startX;
    const y = this.endY - this.startY;
    console.log('33333', x);
    console.log('33333', y);
    if (x > 0 && y > 0) {
      if (x - y > 0) {
        todoActions.rightward();
      } else {
        todoActions.downward();
      }
    } else if (x > 0 && y < 0) {
      if (x + y > 0) {
        todoActions.rightward();
      } else {
        todoActions.upward();
      }
    } else if (x < 0 && y > 0) {
      if (x + y > 0) {
        todoActions.downward();
      } else {
        todoActions.leftward();
      }
    } else if (x < 0 && y < 0) {
      if (x - y > 0) {
        todoActions.upward();
      } else {
        todoActions.leftward();
      }
    }
  }
  onTouchMove=event => {
    console.log(event.defaultPrevented);
    event.preventDefault();
  }
  rendergamebtn=() => {
    const { data } = this.props;
    let { color } = this.props;
    // console.log('渲染按钮的值',data)
    return data.map((n, hang) =>
    // console.log(hang)
      n.map((num, lie) => {
      // console.log(lie)
      // console.log('内容',data[hang][lie])
        if (data[hang][lie] > 0) {
          if (num == 4) { color = 'green'; } else if (num == 8) { color = 'orange'; } else if (num == 16) { color = 'red'; }
          return (
            <div className="btn1-1" style={{ background: `${color}` }}>{data[hang][lie]}</div>
          );
        }
        return (
          <div className="btn1-1" />
        );
      }));
  }
  render() {
    const { data } = this.props;
    console.log('游戏区域', data);
    return (
      <div
        className="game-all"
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        onTouchMove={this.onTouchMove}
      >
        {this.rendergamebtn()}
      </div>
    );
  }
}
