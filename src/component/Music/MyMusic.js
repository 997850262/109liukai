import React from 'react';
import './MyMusic.css';
/* eslint-disable */
// let m=2;
const img=require("../../source/select_music.png");
export default class MyMusic extends React.Component {
//   componentDidMount=()=>{
//     const{music,todoActions}=this.props;
//     console.log(music);
//     const token=music.music.data.token;
//     console.log('222',token)
//     todoActions.fetchmymusic(token);
// }
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
  console.log('我的音乐',select)
  console.log(11111111111,music.music.selectid)
  console.log(3333,music.music.selectmoreid)
  let newList = music.music.result;
  if(newList){
    return newList.map((Item)=>{
      console.log(Item)
      if(music.music.entities.data[Item]!=undefined){
       return music.music.entities.data[Item].list.map(item=>{
         console.log(item)
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
          //  for(let i=0;i<music.music.selectmoreid.length;i++){
          //    if(item!=music.music.selectmoreid[i]){
          //      count++;
          //    }
          //  }
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
    // console.log(music.music.data.token);
    // if(m>0){
    //   const token=music.music.data.token;
    //   todoActions.fetchmymusic(token);
    //   console.log(m);
    //   m--;
    // }
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