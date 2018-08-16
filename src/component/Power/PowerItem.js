import React, { Component } from 'react';
import { Icon } from 'antd';
import './PowerItem.css';
import PowerItemLeft from './PowerItemLeft';
import PowerItemRight from './PowerItemRight';


export default class PowerItem extends Component {
/* eslint-disable */
  constructor(props) {
    super(props);
  }
      closeitem=() => {
        this.props.closeitem();
      }
      setpower=todoActions => {
        todoActions.setpower();
      }
      render() {
        const {
          todoActions, entities, data, isActive
        } = this.props;

        if (isActive == false) { return null; }

        return (
          <div className="PowerItem-all">
            <div className="PowerItem-1">
                        点评作业:拥有个人点评页,可以为学生作业进行点评
                        <div className="itemclose">
                          <Icon type="close" onClick={this.closeitem} />
                        </div>
            </div>
            <div className="PowerItem-2">
              <PowerItemLeft data={data} todoActions={todoActions} />
            </div>
            <div className="PowerItem-3">
              <PowerItemRight todoActions={todoActions} entities={entities} data={data} />
            </div>
            <div className="PowerItemRight-btn">
              <button onClick={() => this.setpower(todoActions)}>确认</button>
            </div>
          </div>
        );
      }
}
