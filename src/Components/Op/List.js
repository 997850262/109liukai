import React from 'react';

export const column1 = [{
    title: '班级',
    dataIndex: 'class',
    key: 'class',
  }, {
    title: '课程状态',
    dataIndex: 'classstate',
    key: 'classstate',
  }, {
    title: '开课时间',
    dataIndex: 'opentime',
    key: 'opentime',
  }, {
    title: '老师',
    dataIndex: 'teacher',
    key: 'teacher',
  }, {
    title: '上课率',
    dataIndex: 'classrate',
    key: 'classrate',
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
    dataIndex: 'submitwork',
    key: 'submitwork',
    render:text=>{
        let num=parseInt(text, 10);
        if(num<80){
          return <span className="Red">{text}</span>
        }
        else if(num>95){
          return <span className="Orange">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }

  }, {
    title: '被点评情况',
    dataIndex: 'Comment',
    key: 'Comment',
    render:text=>{
        let num=parseInt(text, 10);
        if(num<80){
          return <span className="Red">{text}</span>
        }
        else if(num>95){
          return <span className="Orange">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }
  }, {
    title: '打卡率',
    dataIndex: 'card',
    key: 'card',
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
    dataIndex: 'satisfaction',
    key: 'satisfaction',
    render:text=>{
        let num=parseInt(text, 10);
        if(num<80){
          return <span className="Red">{text}</span>
        }
        else if(num>95){
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
    dataIndex: 'class',
    key: 'class',
  }, {
    title: '课程状态',
    dataIndex: 'classstate',
    key: 'classstate',
  }, {
    title: '开课时间',
    dataIndex: 'opentime',
    key: 'opentime',
  }, {
    title: '教学组负责人',
    dataIndex: 'teacher1',
    key: 'teacher1',
  }, {
    title: '上课率',
    dataIndex: 'classrate',
    key: 'classrate',
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
    dataIndex: 'submitwork',
    key: 'submitwork',
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
    title: '被点评情况',
    dataIndex: 'Comment',
    key: 'Comment',
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
    title: '打卡率',
    dataIndex: 'card',
    key: 'card',
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
    dataIndex: 'satisfaction',
    key: 'satisfaction',
    render:text=>{
        let num=parseInt(text, 10);
        if(num<80){
          return <span className="Red">{text}</span>
        }
        else if(num>95){
          return <span className="Orange">{text}</span>
        }
        else{
          return <span>{text}</span>
        }
      }
  }
  ]