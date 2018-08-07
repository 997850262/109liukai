import React, { Component } from 'react';
import { Input, Select} from 'antd';
import './Head.css'

export default class Head extends Component {

    render(){
        const InputGroup = Input.Group;
        const Option = Select.Option;
        return(
        <div className="Headright">
            <div>
               <InputGroup compact>
                <Select defaultValue="mid">
                <Option value="mid">mid</Option>
                </Select>
                <Input style={{ width: '50%' }} defaultValue="" onChange={this.handlemid}/>
                </InputGroup>
            </div>
            <div>
                <button className="sousuo">搜索</button>
            </div>
        </div>
        )
    }
}