import React, { Component } from 'react';


export default class Message extends Component{

            onItemClick=()=>{
                const {onClick,item} =this.props
                if(onClick)
                {
                onClick (item)
                }
                /*return;*/
                }

                render(){
const {item}=this.props
return(
        <div className="main"id="item">
          <div className="content" id="item1" onclick={this.onclick}>
            <img src={item.img} alt="腾讯新闻" id="img1" />
            <div>
              <span className="name" id="name1">{item.name}</span>
              <span className="time" id="time1">{item.time}</span>
              <br/>
                <span className="word" id="word1">{item.word}</span>
            </div>
          </div>
          {/* <div className="content" id="item2" onclick="printf(1)">
          <img src={item.img} alt="微信支付" id="img2" />
          <div>
            <span className="name" id="name2">{item.name}</span>
            <span className="time" id="time2">{item.time}</span>
            <br/>
              <span className="word" id="word2">{item.word}</span>
          </div>
        </div>
        <div className="content" id="item3" onclick="printf(2)">
          <img src={item.img} alt="美团" id="img3" />
          <div>
            <span className="name" id="name3">{item.name}</span>
            <span className="time" id="time3">{item.time}</span>
            <br/>
              <span className="word" id="word3">{item.word}</span>
          </div>
        </div> */}
      </div>
)

}       
}