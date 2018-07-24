import React, { Component } from 'react';
import './Item.css';
import icon from '../source/勾.png';
import icon1 from '../source/圆圈.png';
import icon2 from '../source/圆圈2.png';
import icon3 from '../source/圆圈3.png';
import icon4 from '../source/圆圈4.png';
export default class Item extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         color1:false,
    //         color2:false,
    //         color3:false,
    //         color4:false
    //     }
    //   }
    color1=(idx)=>{
        const { messages} = this.props;
        if(messages[idx].color1==false)
        return <img className="first" src={icon1} alt=""/>
        else return <img className="first" src={icon} alt=""/>
    }
    color2=(idx)=>{
        const { messages} = this.props;
        if(messages[idx].color2==false)
        return <img className="second" src={icon2} alt=""/>
        else return <img className="second" src={icon} alt=""/>
    }
    color3=(idx)=>{
        const { messages} = this.props;
        if(messages[idx].color3==false)
        return <img className="third" src={icon3} alt=""/>
        else return <img className="third" src={icon} alt=""/>
    }
    color4=(idx)=>{
        const { messages} = this.props;
        if(messages[idx].color4==false)
        return <img className="fourth" src={icon4} alt=""/>
        else return <img className="fourth" src={icon} alt=""/>
    }
    setColor1=(idx,event)=>{
        const { onClick1,messages} = this.props;
        if (onClick1) {
          onClick1(idx);
        }
    }
    setColor2=(idx,event)=>{
        const { onClick2,messages} = this.props;
        if (onClick2) {
          onClick2(idx);
        }
    }
    setColor3=(idx,event)=>{
        const { onClick3,messages} = this.props;
        if (onClick3) {
          onClick3(idx);
        }
    }
    setColor4=(idx,event)=>{
        const { onClick4,messages} = this.props;
        if (onClick4) {
          onClick4(idx);
        }
        // const { messages} = this.props;
        // this.setState({
        //     color:!messages.color
        // })
    }
    unshift=(idx,event)=>{
        const { onUnshift,messages } = this.props;
        //console.log(idx)
            if (onUnshift) {
                onUnshift(idx);
            }
    }

    render(){
        const { messages,color1} = this.props;
        return(
            <div>
                {
                    messages.map((item,idx) => {
                        return (            
                          <nav className="item">
                           {/* <nav className="item" onClick={this.unshift.bind(this,idx)}>  */}
                           <div className="nav__item" >
                             <div className="item__name">{item.title}</div>
                             <div className="tupian" onClick={()=>this.unshift(idx)}>
                             <div onClick={()=>this.setColor1(idx)}>
                             {this.color1(idx)}
                             </div>
                             <div onClick={()=>this.setColor2(idx)}>
                             {this.color2(idx)}
                             </div>
                             <div onClick={()=>this.setColor3(idx)}>
                             {this.color3(idx)}
                             </div>
                             <div onClick={()=>this.setColor4(idx)}>
                             {this.color4(idx)}
                             </div>
                             </div>
                           </div>
                        </nav>)  
                      })
                }
            </div>
        )
    }
}