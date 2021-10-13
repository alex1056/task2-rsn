import { useState, useCallback } from 'react';
import s from './row.module.scss';
import cn from 'classnames';
import { Cell } from '../Cell';

const Row = (props) => {
  const { row, removeRow, updateRow } = props;
  const { id, name, age, phone } = row;
  const eMail = row['e-mail'];
  const [cellValues, setCellValues] = useState({
    id,
    name,
    age,
    phone,
    'e-mail': eMail,
  });
  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const onEdit = useCallback(
    ({ id, cellValues }) => {
      setInEditMode({
        status: true,
        rowKey: id,
      });
      setCellValues(cellValues);
    },
    [id, cellValues],
  );

  const onSave = useCallback(
    (cellValues) => {
      updateRow({
        id: cellValues.id,
        name: cellValues.name,
        age: cellValues.age,
        phone: cellValues.phone,
        email: cellValues['e-mail'],
      });
      setInEditMode({
        status: false,
        rowKey: null,
      });
    },
    [cellValues],
  );

  return (
    <tr>
      <Cell
        cellValue={inEditMode.status ? cellValues.id : row.id}
        cellName='id'
        setCellValue={setCellValues}
        inEditMode={inEditMode.status}
      />
      <Cell
        cellValue={inEditMode.status ? cellValues.name : row.name}
        cellName='name'
        setCellValue={setCellValues}
        inEditMode={inEditMode.status}
      />
      <Cell
        cellValue={inEditMode.status ? cellValues.age : row.age}
        cellName='age'
        setCellValue={setCellValues}
        inEditMode={inEditMode.status}
      />
      <Cell
        cellValue={inEditMode.status ? cellValues.phone : row.phone}
        cellName='phone'
        setCellValue={setCellValues}
        inEditMode={inEditMode.status}
      />
      <Cell
        cellValue={inEditMode.status ? cellValues['e-mail'] : row['e-mail']}
        cellName='e-mail'
        setCellValue={setCellValues}
        inEditMode={inEditMode.status}
      />
      <td>
        <button onClick={() => removeRow(row.id)}>Удалить</button>
      </td>

      <td>
        {inEditMode.status && inEditMode.rowKey === row.id ? (
          <>
            <button onClick={() => onSave(cellValues)}>Сохранить</button>
          </>
        ) : (
          <button
            onClick={() =>
              onEdit({
                id: row.id,
                cellValues: {
                  ...cellValues,
                  id,
                  name,
                  age,
                  phone,
                  'e-mail': eMail,
                },
              })
            }
          >
            Редактировать
          </button>
        )}
      </td>
    </tr>
  );
};

export { Row };
