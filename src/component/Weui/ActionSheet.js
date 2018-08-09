import React from 'react';
import PropTypes from 'prop-types';
import './actionSheet.css';

export default class ActionSheet extends React.Component {

  static defaultProps = {
    type:{},
    isActive: false,
    title: '',
    menus: [],
    onCancel: () => {},
  };

  static propTypes = {
    type: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    menus: PropTypes.array.isRequired,
    onCancel: PropTypes.func.isRequired
  }

  getMaskClassName = () => {
    if (!this.props.isActive) {
      return 'mask hideMask';
    }
    return 'mask showMask';
  }

  getMenuClassName = (key) => {
    if (!this.props.isActive) {
      return 'menu';
    }
    else if(!this.props.isActive){
        return 'Androidmenu'
    }
    else if(key=='ios') {return 'menu showMenu';}
    else if(key=='Android') {return 'Android showMenu';}
  }

  handleMenuItemClick = idx => {
    const { menus, onCancel } = this.props;
    menus[idx].click && menus[idx].click(idx);
    onCancel();
  }
  selectbutton=(key)=>{
      console.log(key)
      if(key=="ios"){
        return ( <div className="btn cancel" onClick={this.props.onCancel}>取消</div>)
      }
      else{
          return null
      }
  }
  render() {
    const { title, menus,type } = this.props;
    const key=type.key;
    console.log(key)
    return (
      <div className="actionsheetCtn">
        <div className={this.getMaskClassName()} onClick={this.props.onCancel} />
        <div className={this.getMenuClassName(key)}>
          {
            !title.length
            ? null
            : <div className="title divider">{title}</div>
          }
        {
            menus.map((item, idx) => (
              <div
                className="btn divider"
                key={`actionSheet_${idx}`}
                onClick={() => this.handleMenuItemClick(idx)}
              >
                {item.title}
              </div>
            ))
        }
          {this.selectbutton(key)}
        </div>
       </div>
    );
  }
}