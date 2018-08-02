import React from 'react';
import DListView from '../../reducers/DListView';
import './List.css';
import {Link} from 'react-router'
export const column1 = [{
    title: '头像',
    dataIndex: 'hurl',
    key: 'hurl',
    render:text=>{
      if(!text)
      return <span>空</span>
      else
        return <img src={text} className="listtouxiang"/>
      }
  },{
    title: '学员名',
    dataIndex: 'nick',
    key: 'nick',
  }, {
    title: '学员编号/MID',
    dataIndex: 'mid',
    key: 'mid',
    render:text=>{
      return <div>
        <Link to={`/Op/${text}` }>{text}</Link>
      </div>
    }
  }, {
    title: '入学时间',
    dataIndex: 'enter_time',
    key: 'enter_time',
  }, {
    title: '开课时间',
    dataIndex: 'start_time',
    key: 'start_time',
  }, {
    title: '在学课程',
    dataIndex: 'learning_lessons',
    key: 'learning_lessons',
    render:text=>{
      if(text.length>=1)
      return <span>{text}</span>
      else
      return <span>无</span>
      }
  }, {
    title: '负责老师',
    dataIndex: 'teachers',
    key: 'teachers',
    render:text=>{
      if(text.length>=1)
      return <span>{text}</span>
      else
      return <span>无</span>
      }
  }
  ]
