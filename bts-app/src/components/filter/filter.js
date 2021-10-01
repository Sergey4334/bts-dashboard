import React from 'react';
import './filter.css';

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-input">
        <div className="block-input">
          <div className="lable-filter">Buy advice exchange</div>
          <input type="text" className="input-filter" />
        </div>
        <div className="block-input">
          <div className="lable-filter">Buy advice currency</div>
          <input type="text" className="input-filter" />
        </div>
        <div className="block-input">
          <div className="lable-filter">Buy advice currency</div>
          <input type="text" className="input-filter" />
        </div>
        <div className="block-input">
          <div className="lable-filter">Sell advice currency</div>
          <input type="text" className="input-filter" />
        </div>
      </div>
      <div className="filter-btn">
        <button className="clear-filter">Clear filter</button>
        <button className="btn-filter">Filter Arbitrage</button>
      </div>
    </div>
  );
};

export default Filter;