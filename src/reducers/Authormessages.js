import * as Authormestypes from '../const/Authormestypes'
export default function Authormessages(state ={
    list: [
      {
        name:'三班人',
        id:'MID330900002',
        learning:'摄影课,绘画课',
        starttime:'2018-03-30',
        pay:'987',
        time:'876天',
        lastlogin:'2018-03-30',
        phonenum:'13212333124'
      }
    ],
  },action){
    switch(action.type){

        default:
        return state;
    }
  }