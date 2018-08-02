import React, { Component } from 'react';
import './ButtonBox.css';
import { Button } from 'antd';
export default class ButtonBox2 extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
        <div className="Op-ButtonBox2">
          <div className="buttonleft">
          <Button className="buttonleft1">汇总</Button>
          <Button className="buttonleft2">摄影</Button>
          <Button className="buttonleft3">绘画</Button>
          </div>
        </div>
    )

}
}
