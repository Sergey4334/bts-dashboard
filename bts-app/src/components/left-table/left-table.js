import React, {Component} from "react";
import Filter from '../filter';

import './left-table.css';
import adjIcon from './adjustment.png';

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
            <div>Exp.profit<br/> USD</div>
            <div>Exp.fees<br/> USD</div>
            <div>Adj.</div>
          </div>
        </div>
        <div className="curency-list-item">
          <div className="block-curency">
            <div className="item-curency list-title">
              <div className="green-text">HITBTСЛОТА-USD</div>
              <div>0.33063</div>
              <div className="red-text">BINANСEЛОТА-USDT</div>
              <div>0.334</div>
              <div>353.3</div>
              <div>1.01%(0.15%)</div>
              <div>1</div>
              <div>0.2</div>
              <div><img src={adjIcon} alt="Icon" width="30" /></div>
            </div>
            <div className="item-curency list-title">
              <div className="green-text">BETFINEX/ZEC-USD</div>
              <div>60.50671</div>
              <div className="red-text">KRAKEN/ZEC-USDT</div>
              <div>69.57002</div>
              <div>2.1449</div>
              <div>2.01%(0.15%)</div>
              <div>0.2</div>
              <div>0.34</div>
              <div><img src={adjIcon} alt="Icon" width="30" /></div>
            </div>
            <div className="item-curency list-title">
              <div className="green-text">HITBTСЛОТА-USD</div>
              <div>0.33063</div>
              <div className="red-text">BINANСEЛОТА-USDT</div>
              <div>0.334</div>
              <div>353.3</div>
              <div>1.01%(0.15%)</div>
              <div>1</div>
              <div>0.2</div>
              <div><img src={adjIcon} alt="Icon" width="30" /></div>
            </div>
            <div className="item-curency list-title">
              <div className="green-text">BETFINEX/ZEC-USD</div>
              <div>60.50671</div>
              <div className="red-text">KRAKEN/ZEC-USDT</div>
              <div>69.57002</div>
              <div>2.1449</div>
              <div>2.01%(0.15%)</div>
              <div>0.2</div>
              <div>0.34</div>
              <div><img src={adjIcon} alt="Icon" width="30" /></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
