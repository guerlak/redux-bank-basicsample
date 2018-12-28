
export default (state, action) => {
    console.log(action);

    if(state.totalAmount > 0){
      switch (action.type) {
        case "WITHDRAW"  :
        return {       
          ...state,
          totalAmount: state.totalAmount - action.amount
        }
        default:
          return state;
      }
    }else{
      return state;
    }

};
