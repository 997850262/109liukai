import React from 'react';
import PropTypes from 'prop-types';
import './Progress.css';
const icon=require('./叉.png')
export default class Progress extends React.Component {

  static defaultProps = {
    value:1,
    showCancel:true,
    onCancel: () => {}
  };

  static propTypes = {
    value: PropTypes.number.isRequired,
    showCancel: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired
  }

getvalue=(value)=>{
    console.log('加载')
    console.log(value)
    if (value==0) {
        return 'progress1 hideprogress1';
      }
    else{
          return 'progress1 showprogress1'
    }
}
// addvalue=(value)=>{
//     this.props.addvalue(value);
// }
  render() {
    const {value} = this.props;
    return (
      <div>
        <div className="rongqi">
            <div className="progress1" style={{width:`${value}%`}}>
            {/* <div className={this.getvalue(value)} style={{width:`$value`}}> */}
            </div>
        </div>
        <img src={icon} className="icon" onClick={this.props.onCancel}/>
        <div>
        <button className="up">上传</button>  
        {/* <button className="up" onClick={this.addvalue(value)}>上传</button>   */}
        </div>     
      </div>
    );
  }
}