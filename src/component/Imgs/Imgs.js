import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../List/List.css'
export default class Imgs extends Component {
    // renderItem = (newList) => newList.map((item,idx) => {
    //     console.log(222)
    //     return (
    //         <div>123</div>
    //     )
    // })
    render(){
        const{photos}=this.props;
        return(
            <div className="list-Information">
            <Carousel> 
                
                {
                    photos.map(item => {
                        return (
                            <div>
                                <img src={item}/>
                            </div>
                        )
                    })
                }
                
            </Carousel>
            </div>
        )
    }
}