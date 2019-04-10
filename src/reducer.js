
import {combineReducers} from 'redux';

const INITIAL_VALUE=[];

 const postReducer = (state=INITIAL_VALUE,action)=>{
   if(action.type=="ADD_POST"){
        return [...state,action.payload]
   }else if(action.type=="DELETE_POST"){
          const id=action.payload.id;
          return state.filter((state)=>{
               return state.id!==id
          })
   }
   return state;
}

export default combineReducers({
     postList:postReducer
})

