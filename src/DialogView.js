import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {

  constructor(props) {
    super(props);
    this.state={
      title:'',
      descript:'',
      time:''
    }
    this.handletitle = this.handletitle.bind(this);
    this.handledescript = this.handledescript.bind(this);
    this.handletime = this.handletime.bind(this);
  }
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  handleClose = () => {
    this.props.onCloseClick(false);
  }

  DialogView=()=>{
    this.props.onCloseClick(false);
    const {onClick} =this.props
    const obj = { "title":this.state.title, "descript": this.state.descript, "time": this.state.time};
//+验证
    if(onClick)
    {
    onClick (obj)
    }
    }

    zhiding=()=>{
      this.props.onCloseClick(false);
    const {onClick,idx} =this.props
    if (onClick) {
      this.props.onzhidingClick()
    }
    }
    shanchu=()=>{
      this.props.onCloseClick(false);
      const { onClick} = this.props;
      if (onClick) {
        this.props.onshanchuClick()
      }
    }
    duoxuan=()=>{
       
    }


  handletitle(e)
  {
    this.setState({
      title:e.target.value
    })
  }
  handledescript(e)
  {
    this.setState({
      descript:e.target.value
    })
  }
  handletime(e)
  {
    this.setState({
      time:e.target.value
    })
  }
  /*addItem = () => {
    const obj = { "title":this.state.title, "descript": this.state.descript, "time": this.state.time};
    this.props.onClick(obj);
  }*/
  render() {
    console.log('component render');
    const { isActive,isjia } = this.props;
    // const a=[];
    // a[0]=this.title.value;
    // a[1]=this.descript.value;
    // a[2]=this.time.value;
   
    if (!isActive) {
      return null;
    }
    else{
      if(isjia==true)
    return (
      <div className="mask-ctn">
        <div className="close-btn" onClick={this.handleClose}>close</div>
        <div className="dialog-ctn">
        <div>标题</div><input type="text" id="title"  onChange={this.handletitle}/>
        <div>描述</div><input type="text" id="descript"  onChange={this.handledescript}/>
        <div>时间</div><input type="text" id="time"  onChange={this.handletime}/>
      <div className="queding" onClick={this.DialogView}>
      <input type="button" name="确定" value="确定"/>
      </div>
        </div>
      </div>
    );
else
    return(
      <div className="mask-ctn">
      <div className="close-btn" onClick={this.handleClose}>close</div>
      <div className="dialog-ctn">
          <div onClick={this.zhiding}>
          <input type="button" name="置顶" value="置顶"/>
          </div>
          <div  onClick={this.shanchu}>
          <input type="button" name="删除" value="删除"/>
          </div>
          <div  onClick={this.duoxuan}>
          <input type="button" name="多选" value="多选"/>
          </div>
      </div>
      </div>
  );
  }
}
}

