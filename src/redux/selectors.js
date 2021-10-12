import { createSelector } from 'reselect';

export const tableDataSelector = (state) => state.tableData.entities;

export const tableRowsNumberSelector = (state) =>
  state.tableData.entities.length;
