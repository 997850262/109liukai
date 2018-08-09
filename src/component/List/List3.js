import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import './List.css'
import Imgs from '../Imgs/Imgs.js'
import Information from '../Information/Information.js'
import Answer from '../Answer/Answer.js'
import Comment from '../Comment/Comment.js'
export default class List3 extends Component {
    mapRender = (newList,todoActions)=>{
        return newList.map(item => {
            return (
                <div className="list">
                    <div className="list-left">
                        <div>
                        <Imgs photos={item.photos}/>
                        <Information item={item} />
                        <Answer item={item} todoActions={todoActions}/>
                        </div>
                    </div>
                    <div className="list-right">
                        <div className="commentright">
                        <Comment comments={item.comments} todoActions={todoActions}/>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render(){
        const{todoActions, router, entities, homework}=this.props;
        const data = [
            ...homework.user3
          ];
          let newList = homework.user3;
          if(newList){
            newList = homework.user3.map(id=>{
              const a = entities.data[id];
            const comments = a.comments.map(id =>  {
                return entities.comments[id]
            })
              return {
                ...a,
                classInfo: entities.classes[a.classInfo],
                teacherInfo: entities.teachers[a.teacherInfo],
                author:entities.author[a.author],
                comments:comments,
              }
            });
          }
    return(
        <div>
        {this.mapRender(newList,todoActions)}
        </div>
    )
}
}