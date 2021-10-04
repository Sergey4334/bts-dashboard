import React, {Component} from "react";
import "./right-table.css";

export default class RightTable extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 'USD'};

    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    const activeInstance = this.props.activeItem;

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
                      <input type="radio" name="list" className="input-select-change" onChange={this.handleChange} value="UAH" id="list[0]" />
                      <label htmlFor="list[0]">UAH</label>
                      <input type="radio" className="input-select-change" name="list" onChange={this.handleChange} value="EUR" id="list[1]" />
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
              <div className="curency-value">BTS-{this.state.value}</div>
            </div>
            <div className="active-curency item">
              <div className="title-item">Active instance</div>
              <div className="curency-value">{activeInstance}</div>
            </div>
            <div className="total-curency item">
              <div className="title-item">Total instance</div>
              <div className="curency-value">5</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};
