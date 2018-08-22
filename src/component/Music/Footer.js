import React from 'react';
import './Footer.css';
/* eslint-disable */
const img=require("../../source/button_new_play.png");
const img2=require("../../source/button_rename_red.png");
const img3=require("../../source/button_cut.png");
const img4=require("../../source/button_share.png");
const img5=require("../../source/button_delete.png");
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="Footer-all">
            <div className="Footer-1">
            <img src={img} className="Footer-img"/><br/>
            播放
            </div>
            <div className="Footer-2">
            <img src={img2} className="Footer-img2"/><br/>
            重命名
            </div>
            <div className="Footer-3">
            <img src={img3} className="Footer-img3"/><br/>
            选择片段
            </div>
            <div className="Footer-4">
            <img src={img4} className="Footer-img4"/><br/>
            送给朋友
            </div>
            <div className="Footer-5">
            <img src={img5} className="Footer-img5"/><br/>
            删除
            </div>
        </div>
    );
  }
}
