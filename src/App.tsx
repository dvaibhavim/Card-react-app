import React from "react";
import { cards } from "./ApiClient/data/cards";
import {
  transactions,
  EditSearchTerm,
  dynamicSearch
} from "./ApiClient/data/transactions";
import AmtContainer from "./ApiClient/data/AmtContainer";
import "./styles.css";

export default function App() {
  function embedElements() {
    cards.map((card) => {
      transactions[card.id].map(
        (tr) =>
          (document.getElementById(
            "result"
          ).innerHTML += `<div>${tr.amount}</div><br />`)
      );
      // here result is the id of the div present in the dom
    });
  }

  return (
    <div className="App">
      {cards.map((card) => (
        <div className="credit-card" onClick={this.embedElements}>
          <div className="result"></div>
          <div className="credit-card__number">{card.description}</div>
          <div>
            <ul>
              <li>{card.id}</li>
            </ul>
          </div>
        </div>
      ))}
      <div>
        &nbsp;
        <ul>
          <input
            type="text"
            value={transactions.searchTerm}
            onChange={this.EditSearchTerm}
            placeholder="Amount"
          />
          <AmtContainer amount={this.dynamicSearch} />
        </ul>
      </div>
      {cards.map((card) => (
        <div>
          &nbsp;
          {transactions[card.id].map((tr) => (
            //{transactions[card.id].filter((data))
            <ul>
              <li> {tr.amount}</li>
            </ul>
          ))}
        </div>
      ))}

      {/* <h1>Cards & Transactions</h1>
      <h2>You can find the task in the docs</h2> */}
    </div>
  );
}
