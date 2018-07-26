import React, { Component } from 'react';
import './DialogView.css';
import { addTodo } from '../actions/index'
const icon = require('../source/icon_Good_B-2.png');
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
    //this.props.onCloseClick(false);
    const{isDialogActive,tianjia,todoActions,state}=this.props
    todoActions.handleClose()
    //this.setState({ isDialogActive: false,tianjia:false });
  }

  DialogView=()=>{
    this.handleClose();
    const { todoActions } = this.props;
    const obj = { "title":this.state.title, "descript": this.state.descript, "time": this.state.time};
    todoActions.addTodo(obj)
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

  render() {
    console.log('component render');
    const { state,isDialogActive,tianjia } = this.props;

    if (!state.isDialogActive) {
      return null;
    }
    else {
      //if(isjia){
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
        );}
    }
  }
//}

