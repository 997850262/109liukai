import React, { Component } from 'react';
import './PowerItem.css'
import { Tree } from 'antd';
const DirectoryTree = Tree.DirectoryTree;
const TreeNode = Tree.TreeNode;
export default class PowerItemRight extends Component {
    constructor(props) {
        super(props);
      }
    //   handlename=(item,todoActions)=>{
    //     console.log('获取名字',item.name)
    //     const id=item.id;
    //     todoActions.fitchimg(id)
    //   }
      onSelect = (todoActions) => {
        console.log('Trigger Select');
        const id=0;
        todoActions.fitchimg(id)
      };
      onExpand = () => {
        console.log('Trigger Expand');
      };
    
    mapRender = (newList,todoActions)=>{
        return newList.map(item => {
            console.log(item)
            return (
                    <TreeNode title={item.nick} key="0-0">
                    {this.mapRender2(newList,item,todoActions)}
                    </TreeNode>
            )
        })
    }
    mapRender2 = (newList,item,todoActions)=>{
        console.log('...............', item)
        console.log('...............', item.department2)
        return item.department2.map(item2 => {
            console.log(1111111111)
            return(
                    <TreeNode title={item2.nick} key="0-0-0">
                    {this.mapRender3(newList,item,todoActions)}
                    </TreeNode>
            )
        })
    }
    mapRender3 = (newList,item,todoActions)=>{
        return item.department3.map(item3 => {
            return(
                    <TreeNode title={item3.nick} key="0-0-0-0">
                    {this.mapRender4(newList,item,todoActions)}
                    </TreeNode>
            )
        })
    }
    mapRender4 = (newList,item,todoActions)=>{
        return item.department4.map(item4 => {
            return(
                    <TreeNode title={item4.nick} key="0-0-0-0-0" isLeaf />
                    
            )
        })
    }
    showimg=(showimg)=>{
        console.log(showimg)
        if(showimg==1)
        {
            <div>王鹏</div>
        }
        else{
            <div>空</div>
        }
    }
    render(){
        const{Power,todoActions,newList}=this.props
        console.log(Power)
        console.log(Power.entities)
        console.log(Power.idx)
        console.log(newList)
        console.log(Power.showimg)
        const showimg=Power.showimg;
        return(
        <div className="PowerItemRight-all">
            <div className="PowerItemRight-1">
                <DirectoryTree
                multiple
                onExpand={this.onExpand}
                onSelect={()=>this.onSelect(todoActions)}
                >
                {this.mapRender(newList,todoActions)}
                {/* <TreeNode title="爱奇迪集团" key="0-0">
                    <TreeNode title="广州分公司" key="0-0-0" >
                        <TreeNode title="总经办" key="0-0-0-0" >
                        <TreeNode title="总经办一组" key="0-0-0-0-0-0" />
                        </TreeNode>  
                        <TreeNode title="财务部" key="0-0-0-1" >
                        <TreeNode title="财务一组" key="0-0-0-1-0-0" />
                        </TreeNode>  
                        <TreeNode title="工程部" key="0-0-1-0" >
                        <TreeNode title="工程一组" key="0-0-1-0-0-0" />
                        </TreeNode>  
                        <TreeNode title="产品研发部" key="0-0-1-1" >
                            <TreeNode title="开发一组" key="0-0-1-1-0-0" />
                            <TreeNode title="开发二组" key="0-0-1-1-0-1" />
                            <TreeNode title="测试组" key="0-0-1-1-1-0" />
                        </TreeNode>  
                    </TreeNode>
                </TreeNode> */}
                </DirectoryTree>
            </div>
            <div className="PowerItemRight-2">
                {this.showimg(showimg)}
            </div>
        </div>
        )
    }
}