import React, { Component } from 'react';
import './PowerItem.css';
/* eslint-disable */
import { Tree } from 'antd';
/* eslint-disable */
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
      onSelect = selectedKeys => {
        console.log('Trigger Select');
        const { todoActions } = this.props;
        console.log('传递ID', selectedKeys);
        todoActions.fitchimg(selectedKeys);
      };
      onExpand = () => {
        console.log('Trigger Expand');
      };

    showimg=(entities, data, showimg) => {
      const root = entities.entities[showimg];
      const idx = root.data;
      console.log(idx);
      console.log(data);
      return (
        root.data ? idx.map(id => {
          if (data[id].isselect) { data[id].color = 'gray'; } else { data[id].color = 'white'; }
          return (
            <div className="PowerItemR-all">
              <span onClick={() => this.addpower(data[id].id)} style={{ background: `${data[id].color}` }}>
                {data[id].name} mid:{data[id].mid}
              </span>
            </div>
          );
        })
          : null
      );
    }
    addpower=id => {
      const { todoActions } = this.props;
      console.log(id);
      todoActions.addpower(id);
    }
    mapRender=(entities, result, todoActions) => {
      const root = entities.entities[result];
      console.log(root);
      return (
        <TreeNode title={root.nick} key={root.key}>
          {
            root.children ? root.children.map(result => this.mapRender(entities, result, todoActions))
            : null
            }
        </TreeNode>
      );
    }
    render() {
      const { entities, data, todoActions } = this.props;
      const result = entities.result;
      console.log(entities.entities);
      console.log(result);
      console.log(data);
      const showimg = entities.showimg;
      console.log(showimg);
      return (
        <div className="PowerItemRight-all">
          <div className="PowerItemRight-1">
            <DirectoryTree
              multiple
              onExpand={this.onExpand}
              onSelect={selectedKeys => this.onSelect(selectedKeys)}
            >
              {this.mapRender(entities, result, todoActions)}
            </DirectoryTree>
          </div>
          <div className="PowerItemRight-2">
            {this.showimg(entities, data, showimg)}
          </div>
        </div>
      );
    }
}
