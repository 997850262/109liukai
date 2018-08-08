import React, { Component } from 'react';
import '../List/List.css'
import { Switch } from 'antd';
import Item from 'antd/lib/list/Item';
export default class Information extends Component {

    render(){
    const{todoActions,router,item}=this.props;
    function onChange(checked) {
        console.log(`switch to ${checked}`);
      }

    return(
        <div className="Information">
        <div className="Information-0">
            No.{item.id}
            </div>
            <div>
            <img src={item.photos[0]} style={{height:20,width:30}}/>
            </div>
            <div className="Information-1">
                <div>
                作业:{item.description}
                </div>
                <div>
                    {item.author.nick}
                mid:{item.author.mid}
                </div>
            </div>
            <div>{item.classInfo.name}|</div>
            <div>{item.teacherInfo.nick}</div>
            <div className="Information-2">
                <div className="Information-3">
                点评人:{item.commentator}
                </div>
                <div className="Information-3">
                提交时间:{item.time}
                </div>
                <div className="Information-3">佳作
                <Switch defaultChecked onChange={onChange} />
                </div>
            </div>
        </div>
    )
    }
}