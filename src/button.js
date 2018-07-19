import React, { Component } from 'react';


export default class button extends Component{

            onbuttonClick=()=>{
                const {onClick,item} =this.props
                if(onClick)
                {
                onClick (item)
                }

                }

                render(){
const {item}=this.props
return(
              <div className="footer" id="button" onClick={this.onbuttonClick}>
                <ul>
                  <li>
                  <img src={item.img} alt="微信" />
                  <br/>
                  <span className="i1">{item.name}</span>
                  </li>
                  {/* <li>
                  <img src={item.img} alt="通讯录" />
                  <br/>
                  <span className="i2">通讯录</span>
                  </li>
                  <li>
                  <img src={item.img} alt="发现" />
                  <br/>
                  <span className="i3">发现</span>
                  </li>
                  <li>
                  <img src={item.img} alt="我" />
                  <br/>
                  <span className="i4">我</span>
                  </li> */}
                </ul>
              </div>
)

}       
}