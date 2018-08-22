import React from 'react';
import { Link } from 'react-router';
// import Select from './Select';
// import MyMusic from './MyMusic';
// import RecommendMusic from './RecommendMusic';
import './Tabbar.css';
/* eslint-disable */
let color1='black';
let color2='black';
let color3='black';
export default class Tabbar extends React.Component {
  constructor(props) {
    super(props);
  }
// renderlist=()=>{
//   const{music,todoActions}=this.props;
//   if(点击tabs1){
//     return(
//       <div>
//       <Select music={music} todoActions={todoActions}/>
//       <MyMusic music={music} todoActions={todoActions} />
//       <RecommendMusic music={music} todoActions={todoActions}/>
//       </div>
//     )
//   }
//   else if(点击2){
//     return(
//       <div></div>
//     )
//   }
//   else{
//     return(
//       <div></div>
//     )
//   }
// }
  render() {
    const{music,todoActions}=this.props;
    return (
      <div>
        <div className="Tabbar-all">
        <Link to="music">
          <div className="Tabbar-1" style={{ color: `${color1}` }} onClick={this.setcolor}>
          我的音乐
          </div>
        </Link>
        <Link to="searchmusic">
          <div className="Tabbar-2" style={{ color: `${color2}` }}>
          搜索音乐
          </div>
        </Link>
        <Link to="uploadmusic">
          <div className="Tabbar-3" style={{ color: `${color3}` }}>
          上传音乐
          </div>
        </Link>
        </div>
        {/* {this.renderlist()} */}
        {/* <div>
          <div>
            <Select music={music} todoActions={todoActions}/>
            <MyMusic music={music} todoActions={todoActions} />
            <RecommendMusic music={music} todoActions={todoActions}/>
          </div>
        </div> */}
      </div>
    );
  }
}
