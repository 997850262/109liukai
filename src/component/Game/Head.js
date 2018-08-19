import React, { Component } from 'react';
import './Game.css';

export default class Head extends Component {
  // constructor(props) {
  //   super(props);
  // }
  reset=() => {
    const { todoActions } = this.props;
    todoActions.reset();
  }
  render() {
    const { Score, bestScore } = this.props;
    console.log(Score);
    return (
      <div className="Head-all">
        <div className="Head1">
          <div className="title">
              2048
          </div>
          <div className="Score">
              Scores<br />{Score}
          </div>
          <div className="Best-Score">
              Best Scores <br />{bestScore}
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
