import shortid from 'shortid'; 
import findIndex from 'lodash/findIndex';
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './../actions/types';

export default (state=[], actions ={})=>{
switch(actions.type){
    case ADD_FLASH_MESSAGE:
        return [
            ...state,{
                id: shortid.generate(),
                type: actions.message.type,
                text: actions.message.text
            }
        ];
        case DELETE_FLASH_MESSAGE:
                const index = findIndex(state, { id: actions.id });
                if (index >= 0) {
                  return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                  ];
                }
                return state;
    default: return state;
 }
}