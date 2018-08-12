import React, { Component } from 'react';
import { Input } from 'antd';
export default class Answer extends Component {
    constructor(props) {
        super(props);
        this.state={
            word:''
          }
          this.handleword = this.handleword.bind(this);
      }
      send = (id,comments) => {
        const { todoActions } = this.props;
        console.log(id);
        const word = this.state.word;
        console.log(word)
        console.log(comments.length)
        const newcomment=comments[0].id+comments.length
        console.log("测试",newcomment)
        todoActions.sendword(id,word,newcomment);
    }
    handleword=(e)=>{
    this.setState({
      word:e.target.value
    })
  }
    render(){
    const{todoActions,router,item,comments}=this.props;
        console.log(item.id);
        const id=item.id;
    return(
        <div>
            <div>
                <Input placeholder="default size" style={{ width: 500 }} onChange={this.handleword}/>
                <button onClick={()=>this.send(id,comments)}>发送</button>
            </div>
            <div>
                <input value="这里是快捷回复部分" style={{ width: 600 }}/>
            </div>
        </div>
    )
    }
}