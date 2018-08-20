import { combineReducers } from 'redux';
import ActionTypes from '../const/ActionTypes';
/* eslint-disable */
function game(state = {
  data: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  twinkle : [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ],
  Score: 0,
  bestScore: 0,
  addScore: 0,
  isinitialize: true,//是否初始化
  slide:true,//是否滑动
  gameover:false,
  color: 'white'
}, action) {
  switch (action.type) {
    case ActionTypes.Reset:
    {
      console.log('重置');
      return {
        ...state,
        data: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        twinkle : [
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0],
          [0,0,0,0]
        ],
        Score: 0,
        isinitialize: true,
        slide:true,
        gameover:false,
      };
    }
    case ActionTypes.Upward:
    {
      console.log('向上');
      console.log(state.data);
      const newdata = state.data.slice();
      const newtwinkle = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ];
      let newaddScore=0;
      // let m=3;
      // while(m){
      //     for(let i=0;i<3;i++)
      //     {
      //             newdata[i].map((item,id)=>{
      //                 if(newdata[i][id]==0)
      //                 {
      //                         let temp=newdata[i][id];
      //                         newdata[i][id]=newdata[i+1][id];
      //                         newdata[i+1][id]=temp;
      //                 }
      //                 else if(newdata[i][id]!=0&&newdata[i][id]==newdata[i+1][id])
      //                 {
      //                         newdata[i][id]=2*newdata[i][id];
      //                         state.Score=state.Score+newdata[i][id];
      //                         if(state.Score>state.bestScore)
      //                         {
      //                             state.bestScore=state.Score;
      //                         }
      //                         console.log('加倍',newdata[i][id])
      //                         newdata[i+1][id]=0;
      //                         console.log('清空',newdata[i+1][id])
      //                 }
      //             })

      //             // for(let j=0;j<4;j++)
      //             // {
      //             //     let b=0;
      //             //     if(newdata[i][j]==0)
      //             //     {
      //             //         b=0;
      //             //             let temp=newdata[i][j];
      //             //             newdata[i][j]=newdata[i+1][j];
      //             //             newdata[i+1][j]=temp;
      //             //     }
      //             //     else if(newdata[i][j]!=0&&newdata[i][j]==newdata[i+1][j])
      //             //     {
      //             //             newdata[i][j]=2*newdata[i][j];
      //             //             state.Score=state.Score+newdata[i][j];
      //             //             console.log('加倍',newdata[i][j])
      //             //             newdata[i+1][j]=0;
      //             //             console.log('清空',newdata[i+1][j])
      //             //             b=1;
      //             //         if(b==1) break;
      //             //     }
      //             // }
      //     }
      //     m--;
      // }

      // let flag = 0;
      // newdata[0].map((Item, idx) => {
      //   if (newdata[0][idx] == 0 && newdata[1][idx] > 0) {
      //     const temp = newdata[0][idx];
      //     newdata[0][idx] = newdata[1][idx];
      //     newdata[1][idx] = temp;
      //   }
      //   if (newdata[0][idx] > 0 && newdata[0][idx] == newdata[1][idx]) {
      //     newdata[0][idx] = 2 * newdata[0][idx];
      //     state.Score += newdata[0][idx];
      //     console.log('加倍', newdata[0][idx]);
      //     newdata[1][idx] = 0;
      //   }
      // });
      // newdata[2].map((Item, idx) => {
      //   if (newdata[2][idx] == 0 && newdata[3][idx] > 0) {
      //     const temp = newdata[2][idx];
      //     newdata[2][idx] = newdata[3][idx];
      //     newdata[3][idx] = temp;
      //   }
      //   if (newdata[1][idx] != newdata[2][idx]) {
      //     if (newdata[2][idx] > 0 && newdata[2][idx] == newdata[3][idx]) {
      //       newdata[2][idx] = 2 * newdata[2][idx];
      //       state.Score += newdata[2][idx];
      //       console.log('加倍', newdata[2][idx]);
      //       newdata[3][idx] = 0;
      //       flag = 1;
      //     }
      //   }
      // });
      // newdata[1].map((Item, idx) => {
      //   if (newdata[1][idx] == 0 && newdata[2][idx] > 0) {
      //     const temp = newdata[1][idx];
      //     newdata[1][idx] = newdata[2][idx];
      //     newdata[2][idx] = temp;
      //   }
      //   if (newdata[0][idx] > 0) {
      //     if (flag == 0) {
      //       if (newdata[1][idx] > 0 && newdata[1][idx] == newdata[2][idx]) {
      //         newdata[1][idx] = 2 * newdata[1][idx];
      //         state.Score += newdata[1][idx];
      //         console.log('加倍', newdata[1][idx]);
      //         newdata[2][idx] = 0;
      //         flag = 1;
      //       }
      //     }
      //   }
      // });
      // newdata[0].map((Item, idx) => {
      //   if (newdata[0][idx] == 0 && newdata[1][idx] > 0) {
      //     const temp = newdata[0][idx];
      //     newdata[0][idx] = newdata[1][idx];
      //     newdata[1][idx] = temp;
      //   }
      //   if (flag == 0) {
      //     if (newdata[0][idx] > 0 && newdata[0][idx] == newdata[1][idx]) {
      //       newdata[0][idx] = 2 * newdata[0][idx];
      //       state.Score += newdata[0][idx];
      //       console.log('加倍', newdata[0][idx]);
      //       newdata[1][idx] = 0;
      //     }
      //   }
      // });
      let m=3;
      while(m)
      {
        for(let i=0;i<3;i++){
          for(let j=0;j<4;j++){
            if(newdata[i][j]==0&&newdata[i+1][j]!=0){
              newdata[i][j] = newdata[i+1][j];
              newdata[i+1][j] = 0;
              state.slide=true;
            }
          }
        }
        m--;
      }
      for(let i=0;i<3;i++){
        for(let j=0;j<4;j++){
          if(newdata[i][j]!=0&&newdata[i][j]==newdata[i+1][j])
        {
            newdata[i][j]=2*newdata[i][j];
            state.Score=state.Score+newdata[i][j];
            newaddScore=newaddScore+newdata[i][j];
            console.log('加倍',newdata[i][j])
            newdata[i+1][j]=0;
            console.log('清空',newdata[i+1][j])
            state.slide=true;
            newtwinkle[i][j]=1;
            if (state.Score > state.bestScore) {
              state.bestScore = state.Score;
            }
        }
      }
    }
    for (let i = 0; i < 3; i++) {
			// for (let n = 0; n < 2; n++) {
				for (let j = 0; j < 4; j++) {
					if (newdata[i][j] == 0 && newdata[i+1][j]!= 0) {
						newdata[i][j] = newdata[i+1][j];
            newdata[i+1][j] = 0;
            state.slide=true;
            newtwinkle[i][j]=newtwinkle[i+1][j];
            newtwinkle[i+1][j]=0;
					}
				}
			// }
		}

      return {
        ...state,
        data: newdata,
        twinkle: newtwinkle,
        addScore: newaddScore
      };
    }
    case ActionTypes.Leftward:
    {
      const newdata = state.data.slice();
      const newtwinkle = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ];
      let newaddScore=0;
      // let m = 3;
      // while (m) {
      //   for (let i = 0; i < 4; i++) {
      //     for (let j = 0; j < 3; j++) {
      //       let b = 0;
      //       if (newdata[i][j] == 0) {
      //         b = 0;
      //         const temp = newdata[i][j];
      //         newdata[i][j] = newdata[i][j + 1];
      //         newdata[i][j + 1] = temp;
      //       } else if (newdata[i][j] != 0 && newdata[i][j] == newdata[i][j + 1]) {
      //         newdata[i][j] = 2 * newdata[i][j];
      //         state.Score += newdata[i][j];
      //         if (state.Score > state.bestScore) {
      //           state.bestScore = state.Score;
      //         }
      //         console.log('加倍', newdata[i][j]);
      //         newdata[i][j + 1] = 0;
      //         console.log('清空', newdata[i][j + 1]);
      //         b = 1;
      //         if (b == 1) break;
      //       }
      //     }
      //   }
      //   m--;
      // }
      let m=3;
      while(m)
      {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 3; j++) {
            if(newdata[i][j]==0&&newdata[i][j+1]!=0){
              newdata[i][j] = newdata[i][j+1];
              newdata[i][j+1] = 0;
              state.slide=true;
            }
          }
        }
        m--;
      }
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 3; j++) {
          if(newdata[i][j] != 0 && newdata[i][j] == newdata[i][j + 1])
        {
            newdata[i][j]=2*newdata[i][j];
            state.Score=state.Score+newdata[i][j];
            newaddScore=newaddScore+newdata[i][j];
            console.log('加倍',newdata[i][j])
            newdata[i][j+1]=0;
            console.log('清空',newdata[i][j+1])
            state.slide=true;
            newtwinkle[i][j]=1;
            if (state.Score > state.bestScore) {
              state.bestScore = state.Score;
            }
        }
      }
    }
    for (let i = 0; i < 4; i++) {
			// for (let n = 0; n < 2; n++) {
        for (let j = 0; j < 3; j++) {
					if (newdata[i][j] == 0 && newdata[i][j+1] != 0) {
            newdata[i][j] = newdata[i][j+1];
            newdata[i][j+1] = 0;
            state.slide=true;
            newtwinkle[i][j]=newtwinkle[i][j+1];
            newtwinkle[i][j+1]=0;
					}
				}
			// }
		}
      return {
        ...state,
        data: newdata,
        twinkle: newtwinkle,
        addScore: newaddScore
      };
    }
    case ActionTypes.Downward:
    {
      const newdata = state.data.slice();
      const newtwinkle = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ];
      let newaddScore=0;
      // let m = 3;
      // while (m) {
      //   for (let i = 3; i > 0; i--) {
      //     for (let j = 3; j > 0; j--) {
      //       let b = 0;
      //       if (newdata[i][j] == 0) {
      //         b = 0;
      //         const temp = newdata[i][j];
      //         newdata[i][j] = newdata[i - 1][j];
      //         newdata[i - 1][j] = temp;
      //       } else if (newdata[i][j] != 0 && newdata[i - 1][j] == newdata[i][j]) {
      //         newdata[i][j] = 2 * newdata[i][j];
      //         state.Score += newdata[i][j];
      //         if (state.Score > state.bestScore) {
      //           state.bestScore = state.Score;
      //         }
      //         newdata[i - 1][j] = 0;
      //         b = 1;
      //         if (b == 1) break;
      //       }
      //     }
      //   }
      //   m--;
      // }
      let m=3;
      while(m)
      {
        for(let i=3;i>0;i--){
          for(let j = 3; j >= 0; j--){
            if(newdata[i-1][j]!=0&&newdata[i][j]==0){
              newdata[i][j] = newdata[i-1][j];
              newdata[i-1][j] = 0;
              state.slide=true;
            }
          }
        }
        m--;
      }
      for(let i=3;i>0;i--){
        for(let j = 3; j >= 0; j--){
          if(newdata[i][j]!=0&&newdata[i][j]==newdata[i-1][j])
        {
            newdata[i][j]=2*newdata[i][j];
            newaddScore=newaddScore+newdata[i][j];
            state.Score=state.Score+newdata[i][j];
            console.log('加倍',newdata[i][j])
            newdata[i-1][j]=0;
            console.log('清空',newdata[i-1][j])
            state.slide=true;
            newtwinkle[i][j]=1;
            if (state.Score > state.bestScore) {
              state.bestScore = state.Score;
            }
        }
      }
    }
    for(let i=3;i>0;i--){
			// for (let n = 0; n < 2; n++) {
        for(let j = 3; j >= 0; j--){
					if (newdata[i-1][j]!=0&&newdata[i][j]==0) {
            newdata[i][j] = newdata[i-1][j];
            newdata[i-1][j] = 0;
            state.slide=true;
            newtwinkle[i][j]=newtwinkle[i-1][j];
            newtwinkle[i-1][j]=0;
					}
				}
			// }
		}
      return {
        ...state,
        data: newdata,
        twinkle: newtwinkle,
        addScore: newaddScore
      };
    }
    case ActionTypes.Rightward:
    {
      const newdata = state.data.slice();
      const newtwinkle = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
      ];
      let newaddScore=0;
      // let m = 3;
      // while (m) {
      //   for (let i = 3; i > 0; i--) {
      //     for (let j = 3; j > 0; j--) {
      //       let b = 0;
      //       if (newdata[i][j] == 0) {
      //         b = 0;
      //         const temp = newdata[i][j - 1];
      //         newdata[i][j - 1] = newdata[i][j];
      //         newdata[i][j] = temp;
      //       } else if (newdata[i][j] != 0 && newdata[i][j] == newdata[i][j - 1]) {
      //         newdata[i][j] = 2 * newdata[i][j];
      //         state.Score += newdata[i][j];
      //         if (state.Score > state.bestScore) {
      //           state.bestScore = state.Score;
      //         }
      //         console.log('加倍', newdata[i][j]);
      //         newdata[i][j - 1] = 0;
      //         console.log('清空', newdata[i][j - 1]);
      //         b = 1;
      //         if (b == 1) break;
      //       }
      //     }
      //   }
      //   m--;
      // }
      let m=3;
      while(m)
      {
        for (let i = 3; i >= 0; i--) {
          for (let j = 3; j > 0; j--) {
            if(newdata[i][j]==0&&newdata[i][j-1]!=0){
              newdata[i][j] = newdata[i][j-1];
              newdata[i][j-1] = 0;
              state.slide=true;
            }
          }
        }
        m--;
      }
      for (let i = 3; i >= 0; i--) {
        for (let j = 3; j > 0; j--) {
          if(newdata[i][j] != 0 && newdata[i][j] == newdata[i][j - 1])
        {
            newdata[i][j]=2*newdata[i][j];
            state.Score=state.Score+newdata[i][j];
            newaddScore=newaddScore+newdata[i][j];
            console.log('加倍',newdata[i][j])
            newdata[i][j-1]=0;
            console.log('清空',newdata[i][j-1])
            state.slide=true;
            newtwinkle[i][j]=1;
            if (state.Score > state.bestScore) {
              state.bestScore = state.Score;
            }
        }
      }
    }
    for (let i = 3; i >= 0; i--) {
			// for (let n = 0; n < 2; n++) {
        for (let j = 3; j > 0; j--) {
					if (newdata[i][j] == 0 && newdata[i][j-1] != 0) {
            newdata[i][j] = newdata[i][j-1];
            newdata[i][j-1] = 0;
            state.slide=true;
            newtwinkle[i][j]=newtwinkle[i][j-1];
            newtwinkle[i][j-1]=0;
					}
				}
			// }
		}
      return {
        ...state,
        data: newdata,
        twinkle: newtwinkle,
        addScore: newaddScore
      };
    }
    case ActionTypes.Initialize:
    {
      console.log(222222222222222);
      const data=state.data;
       let x = 0;
      let y = 0;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (data[i][j] == 2048) {
            alert('游戏结束');
            state.gameover=true;
            break;
          }
        }
      }
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if (data[i][j] != 0 && data[i][j] != data[i][j + 1]) {
            x++;
          }
        }
      }
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
          if (data[i][j] != 0 && data[i][j] != data[i + 1][j]) {
            y++;
          }
        }
      }
      if (x == 12 && y == 12) {
        alert('游戏结束');
        state.gameover=true;
      }
      if (state.slide == true && state.gameover == false) {
        let m = 0;
        let num = Math.floor(Math.random() * (4 - 2 + 1) + 2);
        const hang = Math.floor(Math.random() * (3 - 0 + 1) + 0);
        const lie = Math.floor(Math.random() * (3 - 0 + 1) + 0);
        if (data[hang][lie] > 0) {
          console.log('重新随机');
          data.map((n, hang) => n.map((num, lie) => {
            if (data[hang][lie] == 0) {
              m++;
            }
          }));
          if (m > 0) {
            // this.initialize();
          } else { alert('换条路试试?'); }
        } else if (data[hang][lie] == 0) {
          if (num > 3) {
            num = 4;
          } else {
            num = 2;
          }
          data[hang][lie] = num;
          state.twinkle[hang][lie]=2;
        }
        if (state.isinitialize == true) { // 是否初始化
          state.isinitialize=false
        }
        else state.random=false
      }

      return {
        ...state,
        data:data,
        // isinitialize: false,
      };
    }
    case ActionTypes.Random:
    {
      return {
        ...state,
        slide: false,
      };
    }
    case ActionTypes.Gameover:
    {
      return {
        ...state,
        gameover: true,
      };
    }
    default:
      return state;
  }
}

export default combineReducers({
  game
});
