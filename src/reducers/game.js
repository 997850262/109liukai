import { combineReducers } from 'redux';
/* eslint-disable */
import ActionTypes from '../const/ActionTypes';

function game(state = {
    data:[
        [-1,-1,-1,-1],
        [-1,-1,-1,-1],
        [-1,-1,-1,-1],
        [-1,-1,-1,-1]
    ]

}, action) {
  switch (action.type) {
    case ActionTypes.Reset:
    {
        console.log('重置')
        return {...state,
            data:[
                [-1,-1,-1,-1],
                [-1,-1,-1,-1],
                [-1,-1,-1,-1],
                [-1,-1,-1,-1]
            ]
        }
    }
    default:
      return state;
  }
}

export default combineReducers({
game
});
