import React, { Component } from 'react';
import { Tabs } from 'antd';
import Imgs from '../Imgs/Imgs.js'
import Information from '../Information/Information.js'
import Answer from '../Answer/Answer.js'
import Comment from '../Comment/Comment.js'
import './Topbar.css'
import { Table, Icon, Popover } from 'antd'
export default class Topbar extends Component {

rendermap=(entities,homework)=>{return homework.map=(id=>{
    console.log(999)
    console.log('map中的',entities.homework)
    console.log('map中的',homework)
   return( 
       <div>
           123
       </div>
   )
})}

    render(){
    const{todoActions,router,entities,homework}=this.props;
    const TabPane = Tabs.TabPane;
    console.log('Topbar中的',entities.homework)
    console.log('Topbar中的',homework)
    // let newList = homework;
    // newList = homework.map(t=>{
    //     const a = entities.homework.data[t];
    //     return {
    //       ...a,
    //     }
    //   });
    return(
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="我的未点评 今日已点评:" key="1" >
            {/* {this.rendermap(entities,homework)} */}
            {/* <Table 
            rowKey={this.rowKey} 
            dataSource={newList} 
            pagination={false}
            bordered
            /> */}
            <div className="Topbar">
                <div className="Topbar-left">
                    <div>
                    <Imgs todoActions={todoActions} router={router} entities={entities} homework={homework}/>
                    </div>
                    <div className="Topbar-Information"> 
                    <Information todoActions={todoActions} router={router} entities={entities} homework={homework}/>
                    </div>
                    <div> 
                    <Answer todoActions={todoActions} router={router} entities={entities} homework={homework}/>
                    </div>
                </div>
                    <div className="Topbar-right">
                    <Comment todoActions={todoActions} router={router} entities={entities} homework={homework}/>
                    </div>
            </div>
            </TabPane>
            <TabPane tab="我的点评历史 累计点评:" key="2" >

            </TabPane>
            <TabPane tab="全部未点评" key="3" >

            </TabPane>
            <TabPane tab="全部已点评" key="4" >

            </TabPane>
          </Tabs>
        </div>
    )
    }
}