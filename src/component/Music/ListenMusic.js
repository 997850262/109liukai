import React from 'react';
import './ListenMusic.css';
/* eslint-disable */
const img=require("../../source/btn_pause.png");//暂停
const img2=require("../../source/btn_play.png");//播放
const img3=require("../../source/cut_music_finish.png")//完成
const img4=require("../../source/button_cut_music_start.png")//标记起点红色
const img5=require("../../source/button_cut_music_finish.png")//标记终点红色
const img6=require("../../source/button_cut_music_start_gray.png")//标记起点灰色
const img7=require("../../source/button_cut_music_finish_gray.png")//标记终点灰色
const img8=require("../../source/button_cut_music_clear_gray.png")//清除灰色
const img9=require("../../source/button_cut_music_clear.png")//清除红色
let shelter=0;
let widths=0;
export default class ListenMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        play:true,
        alltime:0,
        currentTime:0,
        ismove:false,
        // interceptstart:false,
        // intercept:false,
        signstartTime:0,
        signendTime:0,
        name:""
    }
    this.handlerename = this.handlerename.bind(this);
  }

  getMaskClassName = (isAcitve) => {
    if (!isAcitve) {
      return 'mask hideMask';
    }
    return 'mask showMask';
  }
  audioall=()=>{
    const{music,ispart}=this.props;
    const circlewidth=(this.state.currentTime/this.state.alltime)*100+"%";
      return(
        <div className={`ListenMusic-play-all${ispart}`}>
            {this.playorstop()}
            <div className="slider-all" onClick={this.getmusicx}>
            {this.renderprogress()}
                {this.rendersign()}
                <div className="slider-circle"
                style={{ marginLeft: `${circlewidth}` }}
                type="range"
                onTouchMove={this.onTouchMove}
                onTouchStart={this.onTouchStart}
                onTouchEnd={this.onTouchEnd}
                ></div>
            </div>
        </div>
      )
  }
  renderBody=()=>{
    const{music,ispart}=this.props;
    const minute=Math.floor(this.state.alltime/60);
    const second=Math.floor(this.state.alltime-(60*minute));
    const currentminute=Math.floor(this.state.currentTime/60);
    const currentsecond=Math.floor(this.state.currentTime%60);
    if(ispart==0&&!(music.music.recommendresult.indexOf(music.music.selectid)+1)){
        return(
            <div className="Body">
              <div className="close" onClick={this.close}>关闭</div>
              <div className="title">{music.music.entities.list[music.music.selectid].name}</div>
              <div className="ListenMusic-time"><span>{currentminute}:{currentsecond}</span><span>/{minute}:{second}</span></div>
              {this.audioall()}
                  <audio
                      id="myAudio"
                      src={music.music.entities.list[music.music.selectid].m_url}
                      autoPlay
                      loop
                      onCanPlay={(e) => this.controlAudio('gettime')}
                      onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}
                      >
                  </audio>
            </div>
        ) 
    }
    else if(ispart==0&&music.music.recommendresult.indexOf(music.music.selectid)+1){
        return(
            <div className="Body">
              <div className="close" onClick={this.close}>关闭</div>
              <div className="title">{music.music.recommendentities[music.music.selectid].name}</div>
              <div className="ListenMusic-time"><span>{currentminute}:{currentsecond}</span><span>/{minute}:{second}</span></div>
              {this.audioall()}
                  <audio
                      id="myAudio"
                      src={music.music.recommendentities[music.music.selectid].m_url}
                      autoPlay
                      loop
                      onCanPlay={(e) => this.controlAudio('gettime')}
                      onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}
                      >
                  </audio>
            </div>
        ) 
    }
      else if(ispart==2){
          return(
              <div className="part-Body">
                {this.renderbuttons()}
                {this.audioall()}
                  <audio
                      id="myAudio"
                      src={music.music.entities.list[music.music.selectid].m_url}
                      autoPlay
                      loop
                      onCanPlay={(e) => this.controlAudio('gettime')}
                      onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}
                      >
                  </audio>
              <div className="ListenMusic-time"><span>{currentminute}:{currentsecond}</span><span>/{minute}:{second}</span></div>
                <button className="part-close" onClick={this.successsign}>完成</button>
              </div>
          )
      }
      else if(ispart==1){
          return(
                <div className="rename-Body">
                    <div className="rename-title">请输入新音乐名称</div>
                    <input className="rename-input" type="text" 
                    defaultValue={music.music.entities.list[music.music.selectid].name}
                    onChange={this.handlerename} />
                    <div className="rename-btn">
                      <span className="rename-btn1" onClick={this.props.onCancel}>取消</span>
                      <span className="rename-btn2" onClick={this.onrename}>确定</span>
                    </div>
                </div>
          )
      }
}
renderprogress=()=>{
    const{music}=this.props;
    const shelternow=(this.state.signstartTime/this.state.alltime)*100+"%";
    if(!(music.music.recommendresult.indexOf(music.music.selectid)+1)){
        const shelter=(music.music.entities.list[music.music.selectid].bmt/this.state.alltime)*100+"%";
        const widths=(this.state.currentTime/this.state.alltime)*100+"%";
        if(this.state.signstartTime!=0){
            return(
                <div className="slider-shelter-all">
                <div className="slider-shelter" style={{ width: `${shelternow}` }}></div>
                <div className="sliders" style={{ width: `${widths}` }}></div>
                </div>
            )
        }//给截取但未确定时加标记
        if(music.music.entities.list[music.music.selectid].bmt!=0){
            return(
                <div className="slider-shelter-all">
                <div className="slider-shelter" style={{ width: `${shelter}` }}></div>
                <div className="sliders" style={{ width: `${widths}` }}></div>
                </div>
            )
        }
        else{
            return(
                <div className="slider" style={{ width: `${widths}` }}></div>
            )
        }
    }
    else{
        const shelter=(music.music.recommendentities[music.music.selectid].bmt/this.state.alltime)*100+"%";
        const widths=(this.state.currentTime/this.state.alltime)*100+"%";
        if(this.state.signstartTime!=0){
            return(
                <div className="slider-shelter-all">
                <div className="slider-shelter" style={{ width: `${shelternow}` }}></div>
                <div className="sliders" style={{ width: `${widths}` }}></div>
                </div>
            )
        }//给截取但未确定时加标记
        if(music.music.recommendentities[music.music.selectid].bmt!=0){
            return(
                <div className="slider-shelter-all">
                <div className="slider-shelter" style={{ width: `${shelter}` }}></div>
                <div className="sliders" style={{ width: `${widths}` }}></div>
                </div>
            )
        }
        else{
            return(
                <div className="slider" style={{ width: `${widths}` }}></div>
            )
        }
    }
}
handlerename=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  onrename=()=>{
      const{todoActions}=this.props;
      const name=this.state.name;
    //   console.log(name)
      todoActions.rename(name);
      this.props.onCancel();
  }
  getmusicx=event=>{
    var myVideo=document.getElementById("myAudio");
    // console.log(event);
    this.startX = event.clientX;
    const x=this.startX-54
    this.setState({
        currentTime:+x
    })
    myVideo.currentTime=x;
  }
    onTouchStart=event => {
        // console.log(event);
        // console.log(event.touches);
        this.startX = event.touches[0].clientX;
        this.setState({
            ismove:true
        })
    }
    onTouchMove=event => {
        const{music}=this.props;
        var myVideo=document.getElementById("myAudio");
        this.endX = event.changedTouches[0].clientX;
        // console.log(11111111,this.startX)
        // console.log(22222222,this.endX)
        if(this.state.signendTime==0&&this.endX>300){//限制滑块范围
            this.endX=300
        }
        else if(this.state.signstartTime==0&&this.endX<56){
            this.endX=56
        }
        else if(this.state.signstartTime!=0&&this.endX<this.state.signstartTime){
            this.endX=(this.state.signstartTime+56)
        }
        else if(this.state.signendTime!=0&&this.endX>this.state.signendTime){
            this.endX=(this.state.signendTime+56)
        }
        if(!(music.music.recommendresult.indexOf(music.music.selectid)+1)){
            if(music.music.entities.list[music.music.selectid].bmt!=0&&this.endX<music.music.entities.list[music.music.selectid].bmt){
                this.endX=(music.music.entities.list[music.music.selectid].bmt+56)
            }
            else if(music.music.entities.list[music.music.selectid].emt!=0&&this.endX>music.music.entities.list[music.music.selectid].emt){
                this.endX=(music.music.entities.list[music.music.selectid].emt+56)
            }
        }
        else{
            if(this.endX<0){
                this.endX=0+56
            }
            else if(this.endX>this.state.alltime){
                this.endX=this.state.alltime+55
            } 
        }
        const x = this.endX - this.startX;
        this.setState({
            currentTime:myVideo.currentTime+x
        })
  }
  onTouchEnd=event => {
    var myVideo=document.getElementById("myAudio");
    myVideo.currentTime = this.state.currentTime;
    this.setState({
        ismove:false
    });
  }
  renderbuttons=()=>{//截取片断
    // console.log(111,this.state.signstartTime)
    // console.log(111,this.state.signendTime)
    const{music}=this.props
    if((music.music.entities.list[music.music.selectid].bmt==0&&music.music.entities.list[music.music.selectid].emt==0)&&(this.state.signstartTime==0&&this.state.signendTime==0)){
        return(
            <div className="intercept">
                <div>
                    <div className="intercept-1">
                    <img src={img4}  className="intercept-start" onClick={this.signstart}/> <span className="intercept-descript">标记起点</span>
                    </div>
                </div>
                <div>
                    <div className="intercept-1">
                    <img src={img8}  className="intercept-start"/> <span className="intercept-descript">清除</span>
                    </div>
                </div>
                <div>
                    <div className="intercept-1">
                    <img src={img5}  className="intercept-start" onClick={this.signend}/> <span className="intercept-descript">标记终点</span>
                    </div>
                </div>
            </div>
        )
    }
    else if(this.state.signstartTime>0&&this.state.signendTime==0){
        return(
            <div className="intercept">
            <div>
                <div className="intercept-1">
                <img src={img6}  className="intercept-start"/> <span className="intercept-descript">标记起点</span>
                </div>
            </div>
            <div>
                <div className="intercept-1">
                <img src={img9}  className="intercept-start" onClick={this.cleansign}/> <span className="intercept-descript">清除</span>
                </div>
            </div>
            <div>
                <div className="intercept-1">
                <img src={img5}  className="intercept-start" onClick={this.signend}/> <span className="intercept-descript">标记终点</span>
                </div>
            </div>
        </div>
        )
    }
    else{
        return(
            <div className="intercept">
            <div>
                <div className="intercept-1">
                <img src={img6}  className="intercept-start"/> <span className="intercept-descript">标记起点</span>
                </div>
            </div>
            <div>
                <div className="intercept-1">
                <img src={img9}  className="intercept-start" onClick={this.cleansign}/> <span className="intercept-descript">清除</span>
                </div>
            </div>
            <div>
                <div className="intercept-1">
                <img src={img7}  className="intercept-start"/> <span className="intercept-descript">标记终点</span>
                </div>
            </div>
        </div>
        )
    }
  }
  close=()=>{
    this.setState({
        play:true
    })
    this.props.onCancel();
  }
    signstart=()=>{//标记起点
        var myVideo=document.getElementById("myAudio");
        this.setState({
            signstartTime:myVideo.currentTime,
            // interceptstart:true
        })
    }
    signend=()=>{//标记终点
        var myVideo=document.getElementById("myAudio");
        if(this.state.signstartTime==0){
            alert('请先标记起点')
        }
        else if(myVideo.currentTime-this.state.signstartTime<10){
            alert('不足10秒,请重新标记')
        }
        else{
            this.setState({
                signendTime:myVideo.currentTime,
                // intercept:true
            })
        }
    }
    successsign=()=>{
        const{todoActions,music}=this.props;
        const signstartTime=this.state.signstartTime;
        const signendTime=this.state.signendTime;
        // if(signstartTime!=0&&signendTime-signstartTime<10){
        //     alert('请标记终点')
        // }
        if(signstartTime!=0&&signendTime-signstartTime>=10) {
        todoActions.signtime(signstartTime,signendTime);
        this.props.onCancel();
        }
        else{
        this.props.onCancel();
        }
        this.setState({
            play:true,
            signstartTime:0,
            signendTime:0,
        })
    }
    cleansign=()=>{
        const{todoActions}=this.props;
        this.setState({
            signstartTime:0,
            // interceptstart:false,
            signendTime:0,
            // intercept:false
        })
        todoActions.cleansigntime();
    }
    rendersign=()=>{
        const{music}=this.props;
        const startTime=(this.state.signstartTime/this.state.alltime)*0.7*100+"%"
        const endTime=(this.state.signendTime/this.state.alltime)*0.7*100+"%"
        if(!(music.music.recommendresult.indexOf(music.music.selectid)+1)){
            const signstartTime=(music.music.entities.list[music.music.selectid].bmt/this.state.alltime)*0.7*100+"%"
            const signendTime=(music.music.entities.list[music.music.selectid].emt/this.state.alltime)*0.7*100+"%"
            if(this.state.signstartTime>0&&this.state.signendTime==0){
                return(
                    <img src={img4} className="startsign" style={{ left: `${startTime}` }}/>
                )
            }
            else if(this.state.signendTime>0){
                return(
                    <div>
                    <img src={img4} className="startsign" style={{ left: `${startTime}` }}/>
                    <img src={img5} className="endsign" style={{ left: `${endTime}` }}/>
                    </div>
                )
            }//渲染未确定的标记
            if(music.music.entities.list[music.music.selectid].bmt>0&&music.music.entities.list[music.music.selectid].emt==0){//只渲染起点标记
                return(
                    <img src={img4} className="startsign" style={{ left: `${signstartTime}` }}/>
                )
            }
            else if(music.music.entities.list[music.music.selectid].emt>0){
                return(
                    <div>
                    <img src={img4} className="startsign" style={{ left: `${signstartTime}` }}/>
                    <img src={img5} className="endsign" style={{ left: `${signendTime}` }}/>
                    </div>
                )
            }
            else return null;
        }
        else{
            const signstartTime=(music.music.recommendentities[music.music.selectid].bmt/this.state.alltime)*0.7*100+"%"
            const signendTime=(music.music.recommendentities[music.music.selectid].emt/this.state.alltime)*0.7*100+"%"
            if(this.state.signstartTime>0&&this.state.signendTime==0){
                return(
                    <img src={img4} className="startsign" style={{ left: `${startTime}` }}/>
                )
            }
            else if(this.state.signendTime>0){
                return(
                    <div>
                    <img src={img4} className="startsign" style={{ left: `${startTime}` }}/>
                    <img src={img5} className="endsign" style={{ left: `${endTime}` }}/>
                    </div>
                )
            }//渲染未确定的标记
            if(music.music.recommendentities[music.music.selectid].bmt>0&&music.music.recommendentities[music.music.selectid].emt==0){//只渲染起点标记
                return(
                    <img src={img4} className="startsign" style={{ left: `${signstartTime}` }}/>
                )
            }
            else if(music.music.recommendentities[music.music.selectid].emt>0){
                return(
                    <div>
                    <img src={img4} className="startsign" style={{ left: `${signstartTime}` }}/>
                    <img src={img5} className="endsign" style={{ left: `${signendTime}` }}/>
                    </div>
                )
            }
            else return null;
        }
    }
    playorstop=()=>{//显示播放还是暂停按钮
        if(this.state.play==false){
            return(
                <img src={img2} className="playbtn" onClick={this.playmusic}/>
            )
        }
        else{
            return(
                <div>
                    <img src={img} className="playbtn" onClick={this.playmusic}/>
                </div>
            )
        }
    }
    playmusic=()=>{//播放或暂停
        var myVideo=document.getElementById("myAudio");
        if(this.state.play==false){
            myVideo.play();
            this.setState({
                play:true
            }) 
        }
        else{
            myVideo.pause();
            this.setState({
                play:false,
                currentTime:myVideo.currentTime
            }) 
        }
    }
    controlAudio(type, value) {
        const{music}=this.props;
        var myVideo=document.getElementById("myAudio");
        switch(type) {
            case 'gettime':{
                this.setState({
                    alltime: myVideo.duration
                });
            }
            case 'getCurrentTime':
            if(this.state.ismove==false){
                if(this.state.signstartTime!=0&&myVideo.currentTime<this.state.signstartTime){
                    myVideo.currentTime=this.state.signstartTime
                }
                if(this.state.signendTime!=0&&myVideo.currentTime>this.state.signendTime){
                    myVideo.currentTime=this.state.signstartTime
                }
                if(this.state.signendTime!=0&&myVideo.currentTime==this.state.signendTime){
                    this.state.currentTime=this.state.signstartTime
                    myVideo.currentTime=this.state.signstartTime
                }
                    if(!(music.music.recommendresult.indexOf(music.music.selectid)+1)){
                        if(music.music.entities.list[music.music.selectid].bmt!=0&&myVideo.currentTime<music.music.entities.list[music.music.selectid].bmt){
                            myVideo.currentTime=music.music.entities.list[music.music.selectid].bmt
                        }
                        if(music.music.entities.list[music.music.selectid].emt!=0&&myVideo.currentTime>music.music.entities.list[music.music.selectid].emt){
                            myVideo.currentTime=music.music.entities.list[music.music.selectid].bmt
                        }
                        if(music.music.entities.list[music.music.selectid].emt!=0&&myVideo.currentTime==music.music.entities.list[music.music.selectid].emt){
                            this.state.currentTime=music.music.entities.list[music.music.selectid].bmt
                            myVideo.currentTime=music.music.entities.list[music.music.selectid].bmt
                        }
                    }
                    // else{
                    //     if(music.music.recommendentities[music.music.selectid].bmt!=0&&myVideo.currentTime<music.music.recommendentities[music.music.selectid].bmt){
                    //         myVideo.currentTime=music.music.recommendentities[music.music.selectid].bmt
                    //     }
                    //     if(music.music.recommendentities[music.music.selectid].emt!=0&&myVideo.currentTime>music.music.recommendentities[music.music.selectid].emt){
                    //         myVideo.currentTime=music.music.recommendentities[music.music.selectid].bmt
                    //     }
                    //     if(music.music.recommendentities[music.music.selectid].emt!=0&&myVideo.currentTime==music.music.recommendentities[music.music.selectid].emt){
                    //         this.state.currentTime=music.music.recommendentities[music.music.selectid].bmt
                    //         myVideo.currentTime=music.music.recommendentities[music.music.selectid].bmt
                    //     }
                    // }
                this.setState({
                    currentTime: myVideo.currentTime
                });
                if (myVideo.currentTime == myVideo.duration) {
                    myVideo.currentTime=0;
                    this.setState({
                        play: false
                    });
                }
            }
                break;
        }
    }
render() {
    const{isAcitve,music}=this.props;
    if(isAcitve==true){
        return(
            <div>
                <div className={this.getMaskClassName(isAcitve)} />
                <div >
                    {this.renderBody()}
                </div>
            </div>
        )  
        }
    else  return null;
  }
}
