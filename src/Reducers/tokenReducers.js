import { TOKENLIST } from '../constants/index'

const tokenList =(tokenList = [], action)=>{

  switch (action.type) {

    case TOKENLIST:
      if (action.payload.status === 200) {
        return action.payload.data
      }   
        
    default:
      return tokenList
  }

}

export default tokenList;