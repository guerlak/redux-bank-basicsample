
export default (state, action) => {
    console.log(action);

      switch (action.type) {
        case "WITHDRAW"  :
        return {       
          ...state,
          totalAmount: state.totalAmount - action.amount
        }
        case "DEPOSIT"  :
        return {       
          ...state,
          totalAmount: Number(state.totalAmount) + Number(action.amount)
        }
        case "CHARITY"  :
        
        return {       
          ...state,
          totalAmount: 0
        }
        default:
          return state;
      }
  
}

