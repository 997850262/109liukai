import React, { Component } from 'react';

export default class fuxian extends Component {
  onfuxuanClick = () => {
    const { onClick, item } = this.props;
    if (onClick) {
      onClick(item);
    }
  }

  render(){
    const { item } = this.props;
    return(
        <div>
            <div>
            置顶
            </div>
            <div>
            删除
            </div>
            <div>
            多选
            </div>
        </div>
    );
  }
}

