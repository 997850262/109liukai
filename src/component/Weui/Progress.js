import React from 'react';
import PropTypes from 'prop-types';
import './Progress.css';
const icon=require('./叉.png')
export default class Progress extends React.Component {

  static defaultProps = {
    value:0,
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
    if (!this.props.value==0) {
        return 'progress1 hideprogress1';
      }
      else {
          return 'progress1 showprogress1'
      }
}
  render() {
    const {value} = this.props;
    return (
      <div>
        <div className="rongqi">
            <div className={this.getvalue(value)} style={{width:'0%'}}>
                
            </div>
            <img src={icon} className="icon" onClick={this.props.onCancel}/>
        </div>
        <button className="up" >上传</button>       
      </div>
    );
  }
}