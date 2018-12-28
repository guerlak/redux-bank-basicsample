import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import store from './store'
import "./App.css";
import { makeWithdraw, makeDeposit} from "./actions";


function dispatchDeposit(e) {
  const amount = e.target.dataset.amount;
  console.log(amount)
    store.dispatch(makeDeposit(amount));

}

function dispatchWithdraw(e) {
  const amount = e.target.dataset.amount;
  if(store.getState().totalAmount - amount >= 0){
    store.dispatch(makeWithdraw(amount));
  }else{
    alert("Insuficcient founds...")
  } 
}

class App extends Component {

  render() {

    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {store.getState().username} ! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(store.getState().totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={dispatchWithdraw}>WITHDRAW $10,000</button>
          <button data-amount="10000" onClick={dispatchDeposit}>DEPOSIT $10,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
