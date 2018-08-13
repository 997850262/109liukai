import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'
export default function Power(state ={
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
// department:[{0:{id:0,nick:"爱奇迪集团"},department2:[1]}],
// department2:[{1:{id:1,nick:"广州分公司"},department3:[2,3,4,5]}],
// department3:[{
// 2:{id:2,nick:"总经办"},
// 3:{id:3,nick:"财务部"},
// 4:{id:4,nick:"工程部"},
// 5:{id:5,nick:"产品研发部"}
// ,department4:[6,7,8]
// }],
// department4:[{
//     6:{id:6,nick:"开发一组"},
//     7:{id:7,nick:"开发二组"},
//     8:{id:8,nick:"测试组"}
//     ,department5:[9,10,11]
//     }],
// department5:[{
//     9:{id:9,name:"白帆"},
//     10:{id:10,name:"王鹏"},
//     11:{id:11,name:"王鹏2"},
//     }],
idx:[0],
entities:{
department2:{1:{id:1,nick:"广州分公司"}},
department3:{
2:{id:2,nick:"总经办"},
3:{id:3,nick:"财务部"},
4:{id:4,nick:"工程部"},
5:{id:5,nick:"产品研发部"}
},
department4:{
    6:{id:6,nick:"开发一组"},
    7:{id:7,nick:"开发二组"},
    8:{id:8,nick:"测试组"}
    },
department5:{
    9:{id:9,name:"白帆"},
    10:{id:10,name:"王鹏"},
    11:{id:11,name:"王鹏2"},
    },
data:{0:{id:0,nick:"爱奇迪集团",name:"王鹏",department2:[1],department3:[2,3,4,5],department4:[6,7,8],department5:[9,10,11]}}
},
showimg:''
    // data:[
    //     {
    //         key: '1',
    //         name:'白帆',
    //         mid:'100'
    //     },
    //     {
    //         key: '2',
    //         name:'王鹏',
    //         mid:'110'
    //     },
    //     {
    //         key: '3',
    //         name:'王鹏2',
    //         mid:'111'
    //     }
    // ]
},action){
    switch(action.type){
      case ActionTypes.Fitchimg:
      {
        console.log(333333,action.id)
        return{
          ...state,
          showimg:1
        }
      }

      default:
      return state;
    }
  }
