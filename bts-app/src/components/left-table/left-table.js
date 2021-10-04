import React from "react";
import Filter from '../filter';
import ItemCurency from '../item-curency';
import './left-table.css';

const LeftTable = ({itemList,onToggleCurrency}) => {
  const elements = itemList.map((item) => {

    const {id,...itemProps} = item;

    return (
      <div key={ id } className="block-curency">
        <ItemCurency 
          { ...itemProps }
          onToggleCurrency={() => onToggleCurrency(id)}
          />
      </div>
    );
  });
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
          {elements}
        </div>
      </div>
    );
};
export default LeftTable;
