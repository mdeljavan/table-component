import React, { CSSProperties } from "react";
import { TableHeaderP } from "./types";

const TableHeader = ({data}: TableHeaderP) => {
  return (
    <thead>
      <tr>
        {data.map(({ title, ...props }) => (
          <td {...props}>{title}</td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;