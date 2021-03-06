import PropTypes from 'prop-types';
import './Grid.css';
import React from "react";

function Grid({ data: { header = [], values = [], actions = [] } }) {
  return (
    <table className="gridTable">
      <thead>
      <tr>
        {header.map(({ colName }) => (
          <th key={colName}>{colName}</th>
        ))}
        {!!actions.length && <th>Actions</th>}
      </tr>
      </thead>
      <tbody>
      {values.map((row, index) => (
        <tr key={index}>
          {header.map(({ colName, type = 'string', Cell }) => (
            <td key={colName} style={type === 'number' ? { textAlign: 'right' } : null}>
              {typeof Cell === 'function' ? <Cell row={row} /> : row[colName]}
            </td>
          ))}
          {!!actions.length && (
            <td className="gridActions">
              {actions.map(({ label, action, isShown = true }, index) => {
                const isDisplayed = typeof isShown === 'function' ? !!isShown(row) : !!isShown;
                return (
                  isDisplayed && (
                    <button key={index} onClick={() => action(row)}>
                      {label}
                    </button>
                  )
                );
              })}
            </td>
          )}
        </tr>
      ))}
      </tbody>
    </table>
  );
}

Grid.propTypes = {
  data: PropTypes.exact({
    header: PropTypes.arrayOf(
      PropTypes.shape({
        colName: PropTypes.string,
        type: PropTypes.oneOf(['string', 'number']),
        Cell: PropTypes.func,
      })
    ),
    values: PropTypes.arrayOf(PropTypes.object),
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired,
        isShown: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
      })
    ),
  }),
};

export default Grid;