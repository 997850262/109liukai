import React from 'react';
import { Icon } from 'antd';
import { Popover, Button } from 'antd';
import {Link} from 'react-router'

export const column1 = [{
    title: '班级',
    dataIndex: 'classInfo',
    key: 'classInfo',
    render:text=>{
      return <div>
        <Link to={`/Dclass/${text.id}` }>{text.name}</Link>
      </div>
    }
  }, {
    title: '课程状态',
    dataIndex: 'status',
    key: 'status',
    render:text=>{
      if(text==1){
        return <span>已结束</span>
      }
      else{
        return <span>进行中</span>
      }
    }
  }, {
    title: '开课时间',
    dataIndex: 'startTime',
    key: 'startTime',
  }, {
    title: '老师',
    dataIndex: 'teacherInfo',
    key: 'teacherInfo',
    render:text=>{
      const content = (
        <div>
          <p>{text.id}</p>
          <p>{text.mid}</p>
          <p>{text.nick}</p>
          <p>{text.realName}</p>
          <p>{text.wxCode}</p>
        </div>
      );
        return <span>
          <Popover content={content} title="Title">
            <Icon type="qq" />
          </Popover>
          {text.nick}</span>
      }
  }, {
    title: '上课率',
    dataIndex: 'enterRate',
    key: 'enterRate',
    render:text=>{
        let num1=parseInt(text.split("/")[0],10);
        let num2=parseInt(text.split("/")[1],10);
        let num=num1/num2;
        if(num<0.8){
          return <span className="Red">{text}</span>
        }
        else if(num>0.95){
          return <span className="Orange">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }
  }, {
    title: '作业提交率',
    dataIndex: 'homeworkSubmitRate',
    key: 'homeworkSubmitRate',
    render:text=>{
        // let num=parseInt(text, 10);
        if(text<0.80){
          return <span className="Red">{text}</span>
        }
        else if(text>0.95){
          return <span className="Orange">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }

  }, {
    title: '被点评情况',
    dataIndex: 'beCommenttedRate',
    key: 'beCommenttedRate',
    render:text=>{
        // let num=parseInt(text, 10);
        if(text<0.80){
          return <span className="Red">{text}</span>
        }
        else if(text>0.95){
          return <span className="Orange">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }
  }, {
    title: '打卡率',
    dataIndex: 'signRate',
    key: 'signRate',
    render:text=>{
        let num1=parseInt(text.split("/")[0],10);
        let num2=parseInt(text.split("/")[1],10);
        let num=num1/num2;
        if(num<0.8){
          return <span className="Red">{text}</span>
        }
        else if(num>0.95){
          return <span className="Orange">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }
  }, {
    title: '满意度',
    dataIndex: 'satisfyRate',
    key: 'satisfyRate',
    render:text=>{
        // let num=parseInt(text, 10);
        if(text<0.80){
          return <span className="Red">{text}</span>
        }
        else if(text>0.95){
          return <span className="Orange">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }
  }
  ]

  export const column2 = [{
    title: '班级',
    dataIndex: 'classInfo.name',
    key: 'classInfo.name',
  }, {
    title: '课程状态',
    dataIndex: 'status',
    key: 'status',
    render:text=>{
      if(text==1){
        return <span>已结束</span>
      }
      else{
        return <span>进行中</span>
      }
    }
  }, {
    title: '开课时间',
    dataIndex: 'startTime',
    key: 'startTime',
  }, {
    title: '教学组负责人',
    dataIndex: 'teacherInfo.nick',
    key: 'teacherInfo.nick',
  }, {
    title: '上课率',
    dataIndex: 'enterRate',
    key: 'enterRate',
    render:text=>{
        let num1=parseInt(text.split("/")[0],10);
        let num2=parseInt(text.split("/")[1],10);
        let num=num1/num2;
        if(num<0.8){
          return <span className="Red">{text}</span>
        }
        else if(num>0.95){
          return <span className="Orange">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }
  }, {
    title: '作业提交率',
    dataIndex: 'homeworkSubmitRate',
    key: 'homeworkSubmitRate',
    render:text=>{
      // let num=parseInt(text, 10);
      if(text<0.80){
        return <span className="Red">{text}</span>
      }
      else if(text>0.95){
        return <span className="Orange">{text}</span>
      }
      else{
        return <span>{text}</span>
      }
    }

  }, {
    title: '被点评情况',
    dataIndex: 'beCommenttedRate',
    key: 'beCommenttedRate',
    render:text=>{
      // let num=parseInt(text, 10);
      if(text<0.80){
        return <span className="Red">{text}</span>
      }
      else if(text>0.95){
        return <span className="Orange">{text}</span>
      }
      else{
        return <span>{text}</span>
      }
    }
  }, {
    title: '打卡率',
    dataIndex: 'signRate',
    key: 'signRate',
    render:text=>{
        let num1=parseInt(text.split("/")[0],10);
        let num2=parseInt(text.split("/")[1],10);
        let num=num1/num2;
        if(num<0.8){
          return <span className="Red">{text}</span>
        }
        else if(num>0.95){
          return <span className="Orange">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }
  }, {
    title: '满意度',
    dataIndex: 'satisfyRate',
    key: 'satisfyRate',
    render:text=>{
        // let num=parseInt(text, 10);
        if(text<0.80){
          return <span className="Red">{text}</span>
        }
        else if(text>0.95){
          return <span className="Orange">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }
  }
  ]
  export const column3 = [{
      title: '教程',
      dataIndex: 'course_name',
      key: 'course_name'
    },{
      title: '开课时间',
      dataIndex: 'time',
      key: 'time'
    },{
      title: '老师',
      dataIndex: 'teacher_info',
      key: 'teacher_info',
      render:text=>{
        const content = (
          <div>
            <p>{text.id}</p>
            <p>{text.mid}</p>
            <p>{text.nick}</p>
            <p>{text.real_name}</p>
            <p>{text.wx_code}</p>
          </div>
        );
          return <span>
            <Popover content={content} title="Title">
              <Icon type="qq" />
            </Popover>
            {text.nick}</span>
        }
    },{
      title: '满意度评分',
      dataIndex: 'satisfied_score',
      key: 'satisfied_score'
    },{
      title: '具体反馈',
      dataIndex: 'satisfied_detail',
      key: 'satisfied_detail'
    },{
      title: '操作',
      dataIndex: 'reply_status',
      key: 'reply_status',
      render:text=>{
        if(text==1){
          return <span>已回复</span>
        }
        else{
          return <span>待回复<Icon type="down-square-o" /></span>
        }
      }
    },
  ]
