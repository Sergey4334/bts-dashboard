import React from "react";
import "./item-curency.css";
import adjIcon from '../left-table/adjustment.png';

const ItemCurency = ({label, active, onToggleCurrency}) => {
  let classNames = 'item-curency list-title';

  if(active) {
    classNames += ' active';
  };

  return (
    <div className={classNames} onClick={ onToggleCurrency}>
      <div className="green-text">{label[0]}</div>
      <div>{label[1]}</div>
      <div className="red-text">{label[2]}</div>
      <div>{label[3]}</div>
      <div>{label[4]}</div>
      <div>{label[5]}</div>
      <div>{label[6]}</div>
      <div>{label[7]}</div>
      <div>
        <img src={adjIcon} alt="Icon" width="30" />
      </div>
    </div>
  );
};

export default ItemCurency;
