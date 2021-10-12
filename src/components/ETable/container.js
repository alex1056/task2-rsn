import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as Actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';

const mapStateToProps = createStructuredSelector({
  data: selectors.tableDataSelector,
  rowNumber: selectors.tableRowsNumberSelector,
});

const mapDispatchToProps = {
  loadTableData: Actions.loadTableData,
  removeRowLocal: Actions.removeRow,
  updateRowLocal: Actions.updateRow,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);
