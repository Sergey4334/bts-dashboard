import React, { Component } from 'react';

import LeftTable from '../left-table';
import RightTable from '../right-table';

import RowTable from '../row-table';

import './dashboard-page.css';

export default class DashboardPage extends Component {

  state = {
    itemData: [
      this.createItem([
        'HITBTСЛОТА-USD',
        0.33063,
        'BINANСEЛОТА-USDT',
        0.334,
        353.3,
        '1.01%(0.15%)',
        1,
        0.2,
      ]),
      this.createItem([
        'BETFINEX/ZEC-USD',
        65.50063,
        'KRAKEN/ZEC-USD',
        69.57002,
        2.1449,
        '0.27%(0.15%)',
        0.2,
        0.2,
      ]),
      this.createItem([
        'HITBTСЛОТА-USD',
        0.33063,
        'BINANСEЛОТА-USDT',
        0.334,
        353.3,
        '1.01%(0.15%)',
        1,
        0.2,
      ]),
      this.createItem([
        'BETFINEX/ZEC-USD',
        65.50063,
        'KRAKEN/ZEC-USD',
        69.57002,
        2.1449,
        '0.27%(0.15%)',
        0.2,
        0.2,
      ]),
      this.createItem([
        'HITBTСЛОТА-USD',
        0.33063,
        'BINANСEЛОТА-USDT',
        0.334,
        353.3,
        '1.01%(0.15%)',
        1,
        0.2,
      ]),
      this.createItem([
        'BETFINEX/ZEC-USD',
        65.50063,
        'KRAKEN/ZEC-USD',
        69.57002,
        2.1449,
        '0.27%(0.15%)',
        0.2,
        0.2,
      ]),
    ],
    active: false,
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
  };

  onToggleCurrency = (id) => {
    this.setState(({ itemData }) => {

      return {
        itemData: this.toggleProperty(itemData, id, 'active')
      };

    });
  };

  createItem(label) {
    return {
      label,
      active: false,
      id: Math.random() * 2,
    };
  };

  render() {

    const itemCount = this.state.itemData.length;


    const leftTable = (
      <LeftTable itemList={this.state.itemData} onToggleCurrency={this.onToggleCurrency} />
    );

    const rightTable = (
      <RightTable activeItem={itemCount} />
    );

    return (
      <RowTable left={leftTable} right={rightTable} />
    );
  };
};