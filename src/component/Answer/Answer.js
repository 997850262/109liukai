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
      send = (e) => {
        const { todoActions } = this.props;
        const word = this.state.word;
        console.log(word)
        todoActions.sendword(word);
    }
    handleword=(e)=>{
    this.setState({
      word:e.target.value
    })
  }
    render(){
    const{todoActions,router,item}=this.props;

    return(
        <div>
            <div>
                <Input placeholder="default size" style={{ width: 500 }} onChange={this.handleword}/>
                <button onClick={this.send}>发送</button>
            </div>
            <div>
                <input value="这里是快捷回复部分" style={{ width: 600 }}/>
            </div>
        </div>
    )
    }
}