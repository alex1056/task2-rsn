import {
  GET_TABLE_DATA,
  REQUEST,
  SUCCESS,
  FAILURE,
  REMOVE_ROW,
  UPDATE_ROW,
} from '../constants';
import { mapTable, changeElemState } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: [],
};

export default (state = initialState, action) => {
  const { type, payload, response } = action;
  switch (type) {
    case GET_TABLE_DATA + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TABLE_DATA + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: mapTable(response),
      };
    case GET_TABLE_DATA + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };

    case GET_TABLE_DATA + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case REMOVE_ROW:
      return {
        ...state,
        entities: state.entities.filter((item) => {
          return item.id !== payload.id;
        }),
      };

    case UPDATE_ROW:
      return {
        ...state,
        entities: [...changeElemState(state, payload)],
      };

    default:
      return state;
  }
};
