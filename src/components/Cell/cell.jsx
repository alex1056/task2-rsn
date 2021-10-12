import s from './cell.module.scss';
import cn from 'classnames';

const Cell = ({ inEditMode, cellValue, setCellValue, cellName }) => {
  return (
    <td
      className={cn(s.cell, {
        [s.cell_id]: cellName === 'id' || cellName === 'age',
      })}
    >
      {inEditMode && cellName !== 'id' ? (
        <input
          className={cn(s.input, {
            [s.input_id]: cellName === 'id' || cellName === 'age',
          })}
          value={cellValue}
          onChange={(event) =>
            setCellValue((setCellValue) => ({
              ...setCellValue,
              [cellName]: event.target.value,
            }))
          }
        />
      ) : (
        cellValue
      )}
    </td>
  );
};

export { Cell };
