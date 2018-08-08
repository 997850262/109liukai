import React, { Component } from 'react';
import '../List/List.css'
import { List, message, Avatar, Spin } from 'antd';
import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

export default class Comment extends Component {
  reject=(id)=>{
    const{todoActions}=this.props;
    console.log(id)
     todoActions.fetchid(id);
  }
rendercomment=(item)=>{
  if(item.status=="unrevised"&&item.from=="teacher")
  return (
    <div>
      <div>
        {item.nick} mid:{item.mid} {item.time}
      </div>
      <div>
        {item.content}
        <button onClick={()=>this.reject(item.id)}>退回</button>
      </div>
    </div>
)
  else if(item.from=="teacher"&&item.status=="reject")
  return (
    <div>
      <div>
        {item.nick} mid:{item.mid} {item.time}
      </div>
      <div>
        {item.content}
      </div>
      <div><span className="Comment-reject">消息被退回,退回原因{item.reason}</span></div>
    </div>
)
else 
return (
  <div>
    <div>
      {item.nick} mid:{item.mid} {item.time}
    </div>
    <div>
      {item.content}
    </div>
  </div>
)
}
  render(){
    const{comments,todoActions}=this.props;
    return(
      comments.map(item => {
        return(
          <div>
          {this.rendercomment(item)}
          </div>
        )

        // return (
        //   <div>
        //     <div>
        //       {item.nick} mid:{item.mid} {item.time}
        //     </div>
        //     <div>
        //       {item.content}
        //     </div>
        //   </div>
        // )
    })
    )
  }
//   state = {
//     data: [],
//     loading: false,
//     hasMore: true,
//   }

// }
//   getData = (callback) => {
//     reqwest({
//       url: fakeDataUrl,
//       type: 'json',
//       method: 'get',
//       contentType: 'application/json',
//       success: (res) => {
//         callback(res);
//       },
//     });
//   }

//   componentDidMount() {
//     this.getData((res) => {
//       this.setState({
//         data: res.results,
//       });
//     });
//   }

//   handleInfiniteOnLoad = () => {
//     let data = this.state.data;
//     this.setState({
//       loading: true,
//     });
//     if (data.length > 14) {
//       message.warning('Infinite List loaded all');
//       this.setState({
//         hasMore: false,
//         loading: false,
//       });
//       return;
//     }
//     this.getData((res) => {
//       data = data.concat(res.results);
//       this.setState({
//         data,
//         loading: false,
//       });
//     });
//   }
//     render(){
//     const{todoActions,router,comments}=this.props;
//       console.log(comments)
//     return (
//       <div className="demo-infinite-container">
//         <InfiniteScroll
//           initialLoad={false}
//           pageStart={0}
//           loadMore={this.handleInfiniteOnLoad}
//           hasMore={!this.state.loading && this.state.hasMore}
//           useWindow={false}
//         >
//           <List
//             dataSource={this.state.data}
//             renderItem={item => (
//               <List.Item key={item.id}>
//                 <List.Item.Meta
//                   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//                   title={<a href="https://ant.design">{item.name.last}</a>}
//                   description={item.email}
//                 />
//                 <div>Content</div>
//               </List.Item>
//             )}
//           >
//             {this.state.loading && this.state.hasMore && (
//               <div className="demo-loading-container">
//                 <Spin />
//               </div>
//             )}
//           </List>
//         </InfiniteScroll>
//       </div>
//     );
//     }
}