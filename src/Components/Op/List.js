import React from 'react';

export const column1 = [{
    title: '班级',
    dataIndex: 'classInfo.name',
    key: 'classInfo.name',
  }, {
    title: '课程状态',
    dataIndex: 'status',
    key: 'status',
  }, {
    title: '开课时间',
    dataIndex: 'startTime',
    key: 'startTime',
  }, {
    title: '老师',
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

  export const column2 = [{
    title: '班级',
    dataIndex: 'classInfo.name',
    key: 'classInfo.name',
  }, {
    title: '课程状态',
    dataIndex: 'status',
    key: 'status',
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