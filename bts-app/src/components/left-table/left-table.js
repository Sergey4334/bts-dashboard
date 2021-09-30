import React, {Component} from "react";
import Filter from '../filter';
import './left-table.css';

export default class LeftTable extends Component {
  render() {
    return (
      <div className="table-left">
        <Filter />
      </div>
    );
  };
};
