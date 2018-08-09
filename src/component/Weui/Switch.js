import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';
export default class Switch extends React.Component {

  static defaultProps = {
    checked:true,
    onChange: () => {}
  };

  static propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  }
  selectSwitch=(checked)=>{
      console.log(checked)
      if(checked==true)
      return(
          <div className="open"  ></div>
      )
      else
      return(
        <div className="close" ></div>
      )
  }

  onChange=(checked)=>{
    this.props.onChange(checked);
  }
  render() {
    const {checked} = this.props;
    return (
      <div className="Switch" onClick={this.onChange}>
          {this.selectSwitch(checked)}
      </div>
    );
  }
}