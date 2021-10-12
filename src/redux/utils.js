export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => entity[id] || defaultValue,
  );

export const creatKey = (...args) => {
  return args.map((arg) => `<${String(arg)}>`).join(',');
};

export const mapTable = (response) => {
  return response.map((row) => {
    return row.reduce((acc, column) => {
      acc = { ...acc, [column.field.toLowerCase()]: column.value };
      return acc;
    }, {});
  });
};

export const changeElemState = (state, payload) => {
  const { id, name, age, phone, email } = payload;
  const index = state.entities.findIndex((item) => item.id === id);
  if (index >= 0) {
    state.entities[index] = { id, name, age, phone, 'e-mail': email };
  }
  return state.entities;
};
