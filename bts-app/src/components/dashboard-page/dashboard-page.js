import React, { Component } from 'react';

import LeftTable from '../left-table';
import RightTable from '../right-table';
import RowTable from '../row-table';

import './dashboard-page.css';

export default class DashboardPage extends Component {

  state = {
    itemData: [
      this.createItem('Drink Coffe'),
      this.createItem('Create Awesome App'),
      this.createItem('Have a lunch'),
    ]
  };

  createItem(label) {
    return {
      label,
      id: this.maxId++
    };
  };

  render() {

    const itemCount = this.state.itemData.length;

    const leftTable = (
      <LeftTable />
    );

    const rightTable = (
      <RightTable activeItem={itemCount} />
    );

    return (
      <RowTable left={leftTable} right={rightTable} />
    );
  };
};