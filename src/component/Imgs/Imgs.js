import React, { Component } from 'react';
import { Carousel } from 'antd';
import './Imgs.css'
export default class Imgs extends Component {

    render(){
    const{todoActions,router}=this.props;
    function onChange(a, b, c) {
        console.log(a, b, c);
      }
    return(
        <div className="Imgs">
                <Carousel afterChange={onChange}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                </Carousel>
        </div>
    )
    }
}