import React from 'react';
import './Select.css';
/* eslint-disable */
let color1='white';
let color2='white';
export default class Select extends React.Component {
  constructor(props) {
    super(props);
  }
  handleselect=()=>{
    this.props.handleselect();
  }
  handlemoreselect=()=>{
    this.props.handlemoreselect();
  }
  render() {
    const{select}=this.props;
    if(select==true){
      color1='red';
      color2='white';
    }
    else{
      color2='red';
      color1='white';
    }
    return (
        <div className="Select-all">
            {/* <input type="radio" name="class" className="Select-1" checked="checked"
            onClick={this.handleselect}
            /> */}
            <div className="Select-1" onClick={this.handleselect} style={{ background: `${color1}` }}></div>单选
            <div className="Select-2" onClick={this.handlemoreselect} style={{ background: `${color2}` }}></div>多选
            {/* <input type="radio" name="class" className="Select-2"
            onClick={this.handlemoreselect}
            />多选 */}
        </div>
    );
  }
}
