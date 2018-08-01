import React from 'react';
import DclassView from '../../reducers/DclassView';
import './List.css';
const icon1=require("../../source/黑勾.png")
const icon2=require("../../source/叉号.png")
const icon3=require("../../source/横线.png")
export const column1 = [{
    title: '课程内容',
    dataIndex: 'course_name',
    key: 'course_name',
  },{
    title: '上课时间',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '上课情况',
    dataIndex: 'enter_status',
    key: 'enter_status',
    render:text=>{
      if(text==1)
      return <img src={icon1} className="gou"/>
      else
      return <img src={icon2} className="cha"/>
      }
  },{
    title: '作业提交情况',
    dataIndex: 'homework_status',
    key: 'homework_status',
    render:text=>{
      if(text==1)
      return <img src={icon1} className="gou"/>
      else
      return <img src={icon2} className="cha"/>
      }
  }, {
    title: '被点评情况',
    dataIndex: 'review_status',
    key: 'review_status',
    render:text=>{
      if(text==1)
      return <img src={icon1} className="gou"/>
      else if(text==-1)
      return <img src={icon3} className="hen"/>
      else
      return <img src={icon2} className="cha"/>
      }
  }, {
    title: '打卡情况',
    dataIndex: 'clockin_status',
    key: 'clockin_status',
    render:text=>{
      if(text==1)
      return <img src={icon1} className="gou"/>
      else
      return <img src={icon2} className="cha"/>
      }
  }, {
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    key: 'satisfied_score',
    render:text=>{
      if(text<5)
      return <span className="Red">{text}</span>
      else
      return <span>{text}</span>
      }
  }
  ]
