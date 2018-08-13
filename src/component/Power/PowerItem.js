import React, { Component } from 'react';
import './PowerItem.css'
import PowerItemLeft from './PowerItemLeft'
import PowerItemRight from './PowerItemRight'
import {Icon} from 'antd';

export default class PowerItem extends Component {
    constructor(props) {
        super(props);
      }
      closeitem=()=>{
          this.props.closeitem();
      }
    render(){
        const{todoActions,Power,isActive}=this.props
        const entities=Power.entities;
        let newList = Power.idx;
        if(newList){
          newList = Power.idx.map(id=>{
            const a = entities.data[id];
          const department2 = a.department2.map(id =>  {
              return entities.department2[id]
          })
          const department3 = a.department3.map(id =>  {
            return entities.department3[id]
        })
        const department4 = a.department4.map(id =>  {
            return entities.department4[id]
        })
        const department5 = a.department5.map(id =>  {
            return entities.department5[id]
        })
            return {
              ...a,
              department2:department2,
              department3:department3,
              department4:department4,
              department5:department5,
            }
          });
        }
        console.log(newList)
        if(isActive==false)
        {return null;}
        else{
            return(
                <div className="PowerItem-all">
                    <div className="PowerItem-1">
                        点评作业:拥有个人点评页,可以为学生作业进行点评
                        <div className="itemclose">
                        <Icon type="close" onClick={this.closeitem}/>
                        </div>
                    </div>
                    <div className="PowerItem-2">
                    <PowerItemLeft newList={newList}/>
                    </div>
                    <div className="PowerItem-3">
                    <PowerItemRight todoActions={todoActions} Power={Power} newList={newList}/>
                    </div>
                    <div className="PowerItemRight-btn">
                    <button>确认</button>
                    </div>
                </div>
                )
        }
    }
}