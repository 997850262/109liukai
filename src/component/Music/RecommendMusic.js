import React from 'react';
import './RecommendMusic.css';
/* eslint-disable */
// let m=2;
export default class RecommendMusic extends React.Component {
//   componentDidMount=()=>{
//     const{music,todoActions}=this.props;
//     console.log(music);
//     const token=music.music.data.token;
//     console.log('333',token)
//     todoActions.fetchrecommendmusic(token);
// }
  rendermylist=()=>{
    const{music,todoActions}=this.props;
    let newList = music.music.recommendresult;
    console.log(2222222222,newList)
    return newList.map((Item,idx)=>{
        return(
        <div className="RecommendMusic-list-all">{music.music.recommendentities[Item].name}</div>
        )
      })
  }
  render() {
    const{music,todoActions}=this.props;
    console.log(music.music.data.token);
    // if(m>0){
    //   const token=music.music.data.token;
    //   todoActions.fetchrecommendmusic(token);
    //   console.log(m);
    //   m--;
    // }
    return (
          <div className="RecommendMusic-all">
            <div className="RecommendMusic-title">推荐音乐</div>
            <div className="RecommendMusic-list">{this.rendermylist()}</div>
          </div>
    );
  }
}