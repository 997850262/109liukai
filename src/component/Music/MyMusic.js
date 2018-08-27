import React from 'react';
import './MyMusic.css';
/* eslint-disable */
const img=require("../../source/select_music.png");
export default class MyMusic extends React.Component {

handleoneselect=(item)=>{
  const{todoActions}=this.props;
  const id=item;
  todoActions.selectid(id);
}
handlemoreselect=(item)=>{
  const{todoActions}=this.props;
  const id=item;
  todoActions.selectmoreid(id);
}

rendermylist=()=>{
  const{music,todoActions,select}=this.props;
  let count=0;
  let newList = music.music.result;
  if(newList){
    return newList.map((Item)=>{
      if(music.music.entities.data[Item]!=undefined){
       return music.music.entities.data[Item].list.map(item=>{
         if(select==true&&music.music.selectid==item){//单选
           return(
             <div className="list-all">
               <img src={img} className="singleselect"/>
               <div className="MyMusic-list-all" onClick={()=>this.handleoneselect(item)}>{music.music.entities.list[item].name}</div>
             </div>
           )
         }
         else if(select==true&&music.music.selectid!=item){
           return(
          <div className="list-all">
            <div className="MyMusic-list-all" onClick={()=>this.handleoneselect(item)}>{music.music.entities.list[item].name}</div>
          </div>
           )
         }
         else if(select==false){//多选
           if(music.music.selectmoreid.indexOf(item)+1){
            return(
              <div className="list-all">
              <div className="moreselect" style={{background:'red'}} onClick={()=>this.handlemoreselect(item)}>
              <span className="number">{music.music.selectmoreid.indexOf(item)+1}</span>
              </div>
              <div className="MyMusic-list-all">{music.music.entities.list[item].name}</div>
            </div>
            )
           }
           else{
            return(
              <div className="list-all">
              <div className="moreselect" onClick={()=>this.handlemoreselect(item)}></div>
              <div className="MyMusic-list-all">{music.music.entities.list[item].name}</div>
            </div>
            )
           }
        }
      })
      }
    })
  }
}
  render() {
    const{music,todoActions}=this.props;
    return (
        <div className="MyMusic-all">
          <div className="MyMusic-title">
          我的音乐
          <span className="MyMusic-Subtitle">瓶子</span>
          </div>
          <div className="MyMusic-list">{this.rendermylist()}</div>
        </div>
    );
  }
}