import React, { Component } from 'react';
import './List.css';
import DclassView from '../../reducers/DclassView';
export default class Header extends Component {

    render(){
        const{DclassView}=this.props
        return(
        <div className="classinfo">
            <div>班级：{DclassView.data[0].name}</div>
            <div>班级ID：{DclassView.data[0].id}</div>
            <div>老师：{DclassView.data[0].virtual_teacher.nick}</div>
            <div>/ID：{DclassView.data[0].virtual_teacher.id}</div>
            <div>/微信：{DclassView.data[0].virtual_teacher.wx_code}</div>
            <div>负责员工：{DclassView.data[0].real_teacher.name}</div>
            <div>/ID：{DclassView.data[0].real_teacher.mid}</div>
            <div>/微信：{DclassView.data[0].real_teacher.wx_code}</div>
        </div>
        )
    }
}