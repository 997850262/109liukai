import React, { Component } from 'react';
import { Input, Select} from 'antd';
import './Head.css'

export default class Head extends Component {
    constructor(props) {
        super(props);
        this.state={
            mid:''
          }
          this.handlemid = this.handlemid.bind(this);
      }
    sousuo = (e) => {
        const { todoActions } = this.props;
        const mid = this.state.mid;
        console.log(mid)
         todoActions.sendmid(mid);
    }
  handlemid=(e)=>{
    this.setState({
      mid:e.target.value
    })
  }
    render(){
        const{homework,entities}=this.props
        const InputGroup = Input.Group;
        const Option = Select.Option;
        let newList = homework.user1;
          if(newList){
            newList = homework.user1.map(id=>{
              const a = entities.data[id];
            const comments = a.comments.map(id =>  {
                return entities.comments[id]
            })
              return {
                ...a,
                classInfo: entities.classes[a.classInfo],
                teacherInfo: entities.teachers[a.teacherInfo],
                author:entities.author[a.author],
                comments:comments,
              }
            });
          }
          console.log('搜索',homework);
          
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
                <button className="sousuo" onClick={this.sousuo}>搜索</button>
            </div>
        </div>
        )
    }
}