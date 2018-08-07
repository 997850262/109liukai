import React, { Component } from 'react';
import './Information.css'
import { Switch } from 'antd';
export default class Information extends Component {

    render(){
    const{todoActions,router,entities,homework}=this.props;
    function onChange(checked) {
        console.log(`switch to ${checked}`);
      }
      console.log('作品信息',entities)
      console.log('作品信息',homework)
      console.log('作品信息',entities.homework.data)
      let newList = homework;
      if(homework){
        newList = homework.map(id=>{
          const a = entities.homework.data[id];
          return {
            ...a,
            classInfo: entities.homework.classes[a.classInfo],
            teacherInfo: entities.homework.teachers[a.teacherInfo],
            author:entities.homework.teachers[a.author],
            commentsItem:entities.homework.teachers[a.commentsItem]
          }
        });
      }
      console.log(newList[0])

    // return(
    //   homework.map=((item,id)=>{
    //       console.log(item)
    return(
        <div className="Information">
            <div className="Information-0">
            No.
            </div>
            <div>
            <img src='' />
            </div>
            <div className="Information-1">
                <div>
                作业:
                </div>
                <div>
                mid:
                </div>
            </div>
            <div className="Information-2">
                <div className="Information-3">
                点评人:
                </div>
                <div className="Information-3">
                提交时间:
                </div>
                <div className="Information-3">佳作
                <Switch defaultChecked onChange={onChange} />
                </div>
            </div>
        </div>
    )
// })
//     )
    }
}