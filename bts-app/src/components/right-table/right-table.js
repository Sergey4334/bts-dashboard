import React from "react";
import "./right-table.css";

const RightTable = ({activeItem}) => {
    return (
      <div className="right-table">
        <div className="profit-curency">
          <div className="title-curency">Dashboard profit curency</div>
          <div className="curency">
            <div className="select-curency">
              <label htmlFor="select" className="select">
                    <input type="radio" className="input-select-change" name="list" value="not_changed" id="bg" defaultChecked />
                    <input type="radio" className="input-select-change" name="list" value="not_changed" id="select" />
                    <div className="items">
                      <input type="radio" name="list" className="input-select-change" value="first_value" id="list[0]" />
                      <label htmlFor="list[0]">UA</label>
                      <input type="radio" className="input-select-change" name="list" value="second_value" id="list[1]" />
                      <label htmlFor="list[1]">EUR</label>
                      <span id="text">USD</span>
                    </div>
              </label>
            </div>
            <div className="curency-text">
              Selected currency will affect all prifit in dashboard
            </div>
          </div>
        </div>
        <div className="profit-curency">
          <div className="title-curency">Instances</div>
          <div className="curency-instances df-c">
            <div className="most-profit item">
              <div className="title-item">Most profit instance</div>
              <div className="curency-value">BTS-USD</div>
            </div>
            <div className="active-curency item">
              <div className="title-item">Active instance</div>
              <div className="curency-value">{activeItem}</div>
            </div>
            <div className="total-curency item">
              <div className="title-item">Total instance</div>
              <div className="curency-value">6</div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default RightTable;
