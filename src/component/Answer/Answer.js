import React, { Component } from 'react';
import { Input } from 'antd';
export default class Answer extends Component {

    render(){
    const{todoActions,router}=this.props;

    return(
        <div>
            <div>
                <Input placeholder="default size" style={{ width: 500 }} />
                <button>发送</button>
            </div>
            <div>
                <input value="这里是快捷回复部分" style={{ width: 600 }}/>
            </div>
        </div>
    )
    }
}