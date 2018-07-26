const icon = require('../source/icon_Good_B-2.png');
const img6=require("../source/添加.svg");
export const init_state = {
    header:[
      {
      head:"微信",
      img:img6,
      }
    ],
    vip:[
      {
        icon: icon,
        title: '小年糕',
        descript: 'hello 小年糕',
        time: '7-18 11:14',
      }
    ],
    messages: [
      {
        icon: icon,
        title: '小年糕',
        descript: 'hello 小年糕',
        time: '7-18 11:14',
      },
      {
        icon: icon,
        title: '小板凳',
        descript: 'hello 小板凳',
        time: '7-18 11:15',
      },
      {
        icon: icon,
        title: '小豆包',
        descript: 'hi 小豆包',
        time: '7-17 10:00',
      }
    ],
    isDialogActive: false,
    tianjia:false,
    duoxuan:false,
    idx:null
  }