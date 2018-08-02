import React, { Component } from 'react';
import './ButtonBox.css';
import { Button } from 'antd';
import { Link } from 'react-router'
export default class ButtonBox extends Component {
  constructor(props) {
    super(props);
  }
  handleback=()=>{
    const { router } = this.props
    const mid='123'
    router.goBack(mid)
  }
  render(){
    return(
        <div className="Op-ButtonBox">
          <div className="buttonleft">
          <Button className="buttonleft1">汇总</Button>
          <Button className="buttonleft2">摄影</Button>
          <Button className="buttonleft3">绘画</Button>
          </div>
          <div className="Op-buttonright">
          <Button type="danger" onClick={this.handleback}>返回
          <Link to="Dclass"></Link>
          </Button>
          
          </div>
        </div>
    )

}
}
