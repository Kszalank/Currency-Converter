import React from "react";

function Table({ list }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Value</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ names, value, change }) => (
          <tr key={names + value + change}>
            <td key={names} className="table-element">
              {names}
            </td>
            <td key={names + value} className="table-element">
              {value}
            </td>
            <td key={names + change} className="table-element">
              {change}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
