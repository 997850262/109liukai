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
      console.log('作品信息',entities.data)
      let newList = homework;

      if(newList){
        newList = homework.map(id=>{
          const a = entities.data[id];
          return {
            ...a,
            classInfo: entities.classes[a.classInfo],
            teacherInfo: entities.teachers[a.teacherInfo],
            author:entities.author[a.author],
            comments:entities.commentsItem[a.comments]
          }
        });
      }
      console.log(newList)

    // return(
    //   homework.map=((item,id)=>{
    //       console.log(item)
    return(
        <div className="Information">
            <div className="Information-0">
            No.754
            </div>
            <div>
            <img src='' />
            </div>
            <div className="Information-1">
                <div>
                作业:拍摄一组静物
                </div>
                <div>
                mid:1001
                </div>
            </div>
            <div className="Information-2">
                <div className="Information-3">
                点评人:xxx
                </div>
                <div className="Information-3">
                提交时间:1533362538734
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