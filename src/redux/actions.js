import { GET_TABLE_DATA, REMOVE_ROW, UPDATE_ROW } from './constants';

export const loadTableData = () => ({
  type: GET_TABLE_DATA,
  CallAPI: 'GET',
});

export const removeRow = (id) => ({
  type: REMOVE_ROW,
  payload: { id },
});

export const updateRow = ({ id, name, age, phone, email }) => ({
  type: UPDATE_ROW,
  payload: { id, name, age, phone, email },
});
