import React, { Component } from 'react';
import { Tabs } from 'antd';
import Imgs from '../Imgs/Imgs.js'
import Information from '../Information/Information.js'
import Answer from '../Answer/Answer.js'
import Comment from '../Comment/Comment.js'
import './Topbar.css'
import { Table, Icon, Popover } from 'antd'
import { List, Avatar } from 'antd';
import List1 from '../List/List1.js'
import List2 from '../List/List2.js'
import List3 from '../List/List3.js'
import List4 from '../List/List4.js'

export default class Topbar extends Component {
    componentDidMount() {
        const{todoActions}=this.props;
        const a=[{token:1,isReviewed:0},{token:1,isReviewed:1},{token:0,isReviewed:0},{token:0,isReviewed:1}]
        todoActions.fetchhomework(a[0])
        todoActions.fetchhomework2(a[1])
        todoActions.fetchhomework3(a[2])
        todoActions.fetchhomework4(a[3])
      }
    //   renderImgs=(newList)=>{
    //     const Imgs=newList.map((item,idx)=>{
    //       return <Imgs key={idx} item={item}/>
    //     });
    //     return Imgs;
    //   }

    render(){
    const{todoActions,router,entities,homework}=this.props;
    const TabPane = Tabs.TabPane;
    console.log('Topbar中的',entities)
    console.log('Topbar中的',homework)
    console.log('Topbar中的',entities.comments)

    return(
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="我的未点评 今日已点评:" key="1" >
                <List1 todoActions={todoActions} router={router} entities={entities} homework={homework} />
            </TabPane>
            <TabPane tab="我的点评历史 累计点评:" key="2" >
                <List2 todoActions={todoActions} router={router} entities={entities} homework={homework} />
            </TabPane>
            <TabPane tab="全部未点评" key="3" >
                <List3 todoActions={todoActions} router={router} entities={entities} homework={homework} />
            </TabPane>
            <TabPane tab="全部已点评" key="4" >
                <List4 todoActions={todoActions} router={router} entities={entities} homework={homework} />   
            </TabPane>
          </Tabs>
        </div>
    )
    }
}