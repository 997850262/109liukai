import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'
function Power(state ={
    // department:[
    //     {
    //         爱奇迪集团:{
    //             广州分公司:[{总经办:{}
    //                         },
    //                         {财务部:{}
    //                         },
    //                         {工程部:{}
    //                         },
    //                         {产品研发部:[
    //                                     {开发一组:[{mid:'100',name:'白帆'},
    //                                                 {mid:'110',name:'王鹏'},
    //                                                 {mid:'111',name:'王鹏2'},]},
    //                                     {开发二组:[{mid:'100',name:'白帆'}]},
    //                                     {测试组:[{mid:'100',name:'白帆'}]}
    //                                 ]}
    //                     ]
    //         }
    //     }
    // ],
// idx:[0],
// entities:{
// department2:{1:{id:1,nick:"广州分公司",name:"王鹏2",key:"0-0-0"}},
// department3:{
// 2:{id:2,nick:"总经办",key:"0-0-0-0",name:"王鹏2"},
// 3:{id:3,nick:"财务部",key:"0-0-0-1",name:"王鹏2"},
// 4:{id:4,nick:"工程部",key:"0-0-0-2",name:"王鹏2"},
// 5:{id:5,nick:"产品研发部",key:"0-0-0-3",name:"王鹏2"}
// },
// department4:{
//     6:{id:6,nick:"开发一组",key:"0-0-0-0-0"},
//     7:{id:7,nick:"开发二组",key:"0-0-0-0-1"},
//     8:{id:8,nick:"测试组",key:"0-0-0-0-2"}
//     },
// department5:{
//     9:{id:9,name:"白帆"},
//     10:{id:10,name:"王鹏"},
//     11:{id:11,name:"王鹏2"},
//     },
// data:{0:{id:0,nick:"爱奇迪集团",name:"王鹏",key:"0-0",department2:[1],department3:[2,3,4,5],department4:[6,7,8],department5:[9,10,11]}}
// },
// showimg:'',
entities:{
    0:{id:0,nick:"爱奇迪集团",key:"0", children:[1],data:[1001]},
    1:{id:1,nick:"广州分公司",key:"1", children:[2,3,4,5],data:[1002]},
    2:{id:2,nick:"总经办",key:"2",data:[1001]},
    3:{id:3,nick:"财务部",key:"3",data:[1002]},
    4:{id:4,nick:"工程部",key:"4",data:[1003]},
    5:{id:5,nick:"产品研发部",key:"5",children:[6,7,8],data:[1001]},
    6:{id:6,nick:"开发一组",key:"6",data:[1001,1002]},
    7:{id:7,nick:"开发二组",key:"7",data:[1001,1003]},
    8:{id:8,nick:"测试组",key:"8",data:[1002,1003]}
},
result:0,
showimg:0,
},action){
    switch(action.type){
      case ActionTypes.Fitchimg:
      {
        console.log(333333,action.selectedKeys)
        return{
          ...state,
          showimg:action.selectedKeys
        }
      }
      default:
      return state;
    }
  }
  function data(state ={
    1001: { id:1001,name: '白帆', mid: 1001,isselect:false},
    1002: { id:1002,name: '王鹏', mid: 1002,isselect:false},
    1003: { id:1003,name: '王鹏2', mid: 1003,isselect:false},
    sure:false,
    a:[],
    b:[],
    sid:0
}
,action){
    switch(action.type){
      case ActionTypes.Addpower:
      {
          console.log('增加权限',action.id)
          console.log(state[action.id].isselect)
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                isselect: !state[action.id].isselect
            },
            ...state.a.push(action.id)
        }
      }
      case ActionTypes.Setpower:
      {
          console.log(1111111111)
          const newb=state.a.slice();
          return {
            ...state,
            sure:true,
            b:newb
        }
      }
      case ActionTypes.Cutpower:
      {
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                isselect: !state[action.id].isselect
            },
        }
      }
      case ActionTypes.Deletepower:
      {
          console.log(state.a[0])
          console.log(state[1001])
          console.log(state.a.length)
          const newa = state.a.slice();
          const newb = state.b.slice();
        for(let i=state.b.length-1;i>=0;i--)
        {
        let a=state.a[i]
        let b=state.b[i]
        console.log(b)
          if(state[b].isselect==false)
          {
            newa.splice(i,1);
            newb.splice(i,1);
          }
        }
        console.log(newb)
        const newState={...state}
        newState.a = newa;
        newState.b = newb;
        return newState;
      }
      case ActionTypes.Sendid:
      {
          console.log(action.mid)
          return{
            ...state,
            sid:action.mid
          }
              
      }
      default:
      return state;
    }
  }
  export default combineReducers({
    Power,
    data
  });
