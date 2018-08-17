import { combineReducers } from 'redux';
/* eslint-disable */
import ActionTypes from '../const/ActionTypes';

function game(state = {
    data:[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    flag:[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    Score:0,
    bestScore:0,
    isinitialize:true,
    color:'white',
}, action) {
  switch (action.type) {
    case ActionTypes.Reset:
    {
        console.log('重置')
        return {...state,
            data:[
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ],
            flag:[
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ],
            Score:0,
            isinitialize:true,
        }
    }
    case ActionTypes.Upward:
    {
        console.log('向上')
        console.log(state.data)
        let newdata = state.data.slice();
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
        let flag=0;
        newdata[0].map((Item,idx)=>{
            if(newdata[0][idx]==0&&newdata[1][idx]>0){
                let temp=newdata[0][idx];
                newdata[0][idx]=newdata[1][idx];
                newdata[1][idx]=temp;
            }
            if(newdata[0][idx]>0&&newdata[0][idx]==newdata[1][idx]){
                newdata[0][idx]=2*newdata[0][idx];
                state.Score=state.Score+newdata[0][idx];
                console.log('加倍',newdata[0][idx])
                newdata[1][idx]=0;
            }

        })
        newdata[2].map((Item,idx)=>{
                if(newdata[2][idx]==0&&newdata[3][idx]>0){
                    let temp=newdata[2][idx];
                    newdata[2][idx]=newdata[3][idx];
                    newdata[3][idx]=temp;
                }
                if(newdata[1][idx]!=newdata[2][idx]){
                    if(newdata[2][idx]>0&&newdata[2][idx]==newdata[3][idx]){
                        newdata[2][idx]=2*newdata[2][idx];
                        state.Score=state.Score+newdata[2][idx];
                        console.log('加倍',newdata[2][idx])
                        newdata[3][idx]=0;
                        flag=1
                    }
                }
        })
        newdata[1].map((Item,idx)=>{
            if(newdata[1][idx]==0&&newdata[2][idx]>0){
                let temp=newdata[1][idx];
                newdata[1][idx]=newdata[2][idx];
                newdata[2][idx]=temp;
            }
            if(newdata[0][idx]>0){
                if(flag==0){
                    if(newdata[1][idx]>0&&newdata[1][idx]==newdata[2][idx]){
                        newdata[1][idx]=2*newdata[1][idx];
                        state.Score=state.Score+newdata[1][idx];
                        console.log('加倍',newdata[1][idx])
                        newdata[2][idx]=0;
                        flag=1;
                    }
                }

            }
        })
        newdata[0].map((Item,idx)=>{
            if(newdata[0][idx]==0&&newdata[1][idx]>0){
                let temp=newdata[0][idx];
                newdata[0][idx]=newdata[1][idx];
                newdata[1][idx]=temp;
            }
            if(flag==0){
                if(newdata[0][idx]>0&&newdata[0][idx]==newdata[1][idx]){
                    newdata[0][idx]=2*newdata[0][idx];
                    state.Score=state.Score+newdata[0][idx];
                    console.log('加倍',newdata[0][idx])
                    newdata[1][idx]=0;
                }
            }
        })
        return{...state,
            data:newdata
        }
    }
    case ActionTypes.Leftward:
    {
        let newdata = state.data.slice();
        let m=3;
        while(m){
            for(let i=0;i<4;i++)
            {
                    for(let j=0;j<3;j++)
                    {
                        let b=0;
                        if(newdata[i][j]==0)
                        {
                            b=0;
                                let temp=newdata[i][j];
                                newdata[i][j]=newdata[i][j+1];
                                newdata[i][j+1]=temp;
                        }
                        else if(newdata[i][j]!=0&&newdata[i][j]==newdata[i][j+1])
                        {
                                newdata[i][j]=2*newdata[i][j];
                                state.Score=state.Score+newdata[i][j];
                                if(state.Score>state.bestScore)
                                {
                                    state.bestScore=state.Score;
                                }
                                console.log('加倍',newdata[i][j])
                                newdata[i][j+1]=0;
                                console.log('清空',newdata[i][j+1])
                                b=1; 
                            if(b==1) break;
                        }
                    }
            }
            m--;
        }
        return{...state,
            data:newdata
        }
    }
    case ActionTypes.Downward:
    {
        let newdata = state.data.slice();
        let m=3;
        while(m){
            for(let i=3;i>0;i--)
            {
                    for(let j=3;j>0;j--)
                    {
                        let b=0;
                        if(newdata[i][j]==0)
                        {
                            b=0;
                                let temp=newdata[i][j];
                                newdata[i][j]=newdata[i-1][j];
                                newdata[i-1][j]=temp;
                        }
                        else if(newdata[i][j]!=0&&newdata[i-1][j]==newdata[i][j])
                        {
                                newdata[i][j]=2*newdata[i][j];
                                state.Score=state.Score+newdata[i][j];
                                if(state.Score>state.bestScore)
                                {
                                    state.bestScore=state.Score;
                                }
                                newdata[i-1][j]=0;
                                b=1; 
                            if(b==1) break;
                        }
                    }
            }
            m--;
        }
        return{...state,
            data:newdata
        }
    }
    case ActionTypes.Rightward:
    {
        let newdata = state.data.slice();
        let m=3;
        while(m){
            for(let i=3;i>0;i--)
            {
                    for(let j=3;j>0;j--)
                    {
                        let b=0;
                        if(newdata[i][j]==0)
                        {
                            b=0;
                                let temp=newdata[i][j-1];
                                newdata[i][j-1]=newdata[i][j];
                                newdata[i][j]=temp;
                        }
                        else if(newdata[i][j]!=0&&newdata[i][j]==newdata[i][j-1])
                        {
                                newdata[i][j]=2*newdata[i][j];
                                state.Score=state.Score+newdata[i][j];
                                if(state.Score>state.bestScore)
                                {
                                    state.bestScore=state.Score;
                                }
                                console.log('加倍',newdata[i][j])
                                newdata[i][j-1]=0;
                                console.log('清空',newdata[i][j-1])
                                b=1; 
                            if(b==1) break;
                        }
                    }
            }
            m--;
        }
        return{...state,
            data:newdata
        }
    }
    case ActionTypes.Initialize:
    {
        console.log(222222222222222)
        return{
            ...state,
            isinitialize:false
        }
    }
    default:
      return state;
  }
}

export default combineReducers({
game
});
