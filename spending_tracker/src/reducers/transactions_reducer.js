
const transactionsReducer=(state,action)=>{
  switch (action.type) {
    case 'ADD_TRANSACTION':
      const newState =  [...state, action.item]
      return newState
    default:
      return state
  }
}


export default transactionsReducer;
