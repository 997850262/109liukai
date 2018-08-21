import React, { Component } from 'react';
import './Game.css';

let add = false;
let addbest = false;
export default class Head extends Component {
  reset=() => {
    const { todoActions } = this.props;
    todoActions.reset();
  }
  addScore=() => {
    const { addScore } = this.props;
    console.log(123456, addScore);
    if (addScore > 0) {
      console.log('取反前', add);
      add = !add;
      console.log('取反后', add);
      return <div className={`addScore-${add}`}>+{addScore}</div>;
    }
    return null;
  }
  addbestScore=() => {
    const { addbestScore } = this.props;
    console.log(123456, addbestScore);
    if (addbestScore > 0) {
      console.log('取反前', addbest);
      addbest = !addbest;
      console.log('取反后', addbest);
      return <div className={`addbestScore-${addbest}`}>+{addbestScore}</div>;
    }
    return null;
  }
  render() {
    const {
      Score, bestScore, addScore, addbestScore
    } = this.props;
    console.log(Score);
    console.log(addScore);
    console.log(addbestScore);
    return (
      <div className="Head-all">
        <div className="Head1">
          <div className="title">
              2048
          </div>
          <div className="Score-all">
              Scores<br />
            {this.addScore()}
            {/* <div className="addScore">+{addScore}</div> */}
            <div className="Score">{Score}</div>
          </div>
          <div className="Best-Score">
              Best Scores <br />
            {this.addbestScore()}
            <div>{bestScore}</div>
          </div>
        </div>
        <div className="Head2">
          <div className="description">
            <span>输入W A S D移动,或触摸滑动</span>
          </div>
          <div className="restart">
            <button onClick={this.reset}>Restart</button>
          </div>

        </div>
      </div>

    );
  }
}
