import React, { Component } from 'react';
import './PowerItem.css'
import { Input } from 'antd';

export default class PowerItemLeft extends Component {
    constructor(props) {
        super(props);
      }

    render(){
        const{}=this.props

        return(
        <div className="PowerItemLeft-all">
            <div className="PowerItemLeft-title">
                <div>
                <button>删除</button>
                </div>
                <div className="example-input">
                <Input size="small" placeholder="名字" />
                </div>
                <div>
                <button>搜索</button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
        )
    }
}