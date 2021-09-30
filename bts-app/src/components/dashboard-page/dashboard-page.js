import React, { Component } from 'react';

import LeftTable from '../left-table';
import RightTable from '../right-table';
import RowTable from '../row-table';

import './dashboard-page.css';

export default class PeoplePage extends Component {

  state = {
    table: null,
  };

  render() {

    const leftTable = (
      <LeftTable />
    );

    const rightTable = (
      <RightTable />
    );

    return (
      <RowTable left={leftTable} right={rightTable} />
    );
  };
};