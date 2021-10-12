import { combineReducers } from 'redux';

import tableData from './table-data-reducer';

const reducer = combineReducers({
  tableData,
});

export default reducer;
