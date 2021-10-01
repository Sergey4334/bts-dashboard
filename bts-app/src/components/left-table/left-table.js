import React, {Component} from "react";
import Filter from '../filter';
import './left-table.css';

export default class LeftTable extends Component {
  render() {
    return (
      <div className="table-left">
        <Filter />
        <div className="table-list-title">
          <div className="list-title">
            <div>Buy exchange pair</div>
            <div>Buy price</div>
            <div>Sell exchange</div>
            <div>Sell price</div>
            <div>Trade</div>
            <div>Arb%(free%)</div>
            <div>Exp.profit USD</div>
            <div>Exp.fees USD</div>
            <div>Adj.</div>
          </div>
        </div>
      </div>
    );
  };
};
