 export const makeWithdraw = val =>{
    return {
        type: "WITHDRAW",
        amount: val
    }
}

export const makeDeposit = val =>{
    return {
        type: "DEPOSIT",
        amount: val
    }
}

export const charity = val =>{
    return {
        type: "CHARITY",
        amount: val
    }
}


