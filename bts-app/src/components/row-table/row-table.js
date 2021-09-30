import React from "react";
import './row-table.css';

const RowTable = ({ left, right }) => {
  return (
    <div className="df container">
      <div className="block-left">{left}</div>
      <div className="block-right">{right}</div>
    </div>
  );
};

export default RowTable;