import React, { Component } from 'react';
import './PowerItem.css'
import { Input } from 'antd';

export default class PowerItemLeft extends Component {
    constructor(props) {
        super(props);
        this.state={
            mid:''
          }
          this.handlemid = this.handlemid.bind(this);
      }
      handlemid=(e)=>{
        this.setState({
          mid:e.target.value
        })
      }
      sousuo=()=>{
        const { todoActions } = this.props;
        const mid = this.state.mid;
        todoActions.sendid(mid);
      }
    renderpower=(data)=>{
        console.log('左侧',data)
        console.log('左侧',data.sid)
        if(data.sure==true&&data.sid==false)
        return(
            data.b?data.b.map(id=>{
            return (
                <div className="PowerItemR-all">
                <span onClick={()=>this.cutpower(data[id].id)}>
                {data[id].name} mid:{data[id].mid}
                </span>
                </div>
            )
            }
            )
            :null
            )
        else if(data.sid&&data.sure==true)
        {
        console.log('渲染搜索')
        console.log(data.b)
        console.log(data.sid)
       return data.b.map(id=>{
            if(id==data.sid){
            return(
                <div className="PowerItemR-all">
                <span onClick={()=>this.cutpower(data[id].id)}>
                {data[id].name} mid:{data[id].mid}
                </span>
                </div>  
        )}
        else return null; 
        })
        }
        else {return (<div>空</div>);}
    }
    cutpower=(id)=>{
        const {todoActions}=this.props
        console.log(id)
        todoActions.cutpower(id)
    }
    deletepower=(todoActions)=>{
        todoActions.deletepower();
    }
    render(){
        const{data,todoActions}=this.props
        console.log('.........',data)
        return(
        <div className="PowerItemLeft-all">
            <div className="PowerItemLeft-title">
                <div>
                <button onClick={()=>this.deletepower(todoActions)}>删除</button>
                </div>
                <div className="example-input">
                <Input size="small" placeholder="mid" onChange={this.handlemid}/>
                </div>
                <div>
                <button onClick={this.sousuo}>搜索</button>
                </div>
            </div>
            <div>
            {this.renderpower(data)}
            </div>
        </div>
        )
    }
}