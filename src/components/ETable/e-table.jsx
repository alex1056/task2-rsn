import { useState, useEffect } from 'react';
import s from './e-table.module.scss';
import { Row } from '../Row';
import { connector } from './container';
import { API_URL } from '../../config';

const ETable = (props) => {
  const { data, loadTableData, rowNumber, removeRowLocal, updateRowLocal } =
    props;

  useEffect(() => {
    loadTableData();
  }, []);

  const removeRow = (id) => {
    fetch(API_URL + `id=${encodeURI(id)}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          removeRowLocal(id);
          return response.json();
        }
      })
      .then((result) => console.log('Ответ сервера =', result))
      .catch((err) => console.log('Ответ с ошибкой', err));
  };

  const updateRow = ({ id, name, age, phone, email }) => {
    const searchParams = new URLSearchParams({ id, name, age, phone, email });

    fetch(API_URL + `${searchParams.toString()}`, {
      method: 'POST',
    })
      .then((response) => {
        if (response.status === 200) {
          updateRowLocal({ id, name, age, phone, email });
          return response.json();
        }
      })
      .then((result) => console.log('Ответ сервера =', result))
      .catch((err) => console.log('Ответ с ошибкой', err));
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>User data table</h1>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Row
              key={item.id}
              row={item}
              removeRow={removeRow}
              updateRow={updateRow}
            />
          ))}
        </tbody>
      </table>
      <p className={s.countRows}>Количество строк в таблице: {rowNumber}</p>
    </div>
  );
};

export default connector(ETable);
