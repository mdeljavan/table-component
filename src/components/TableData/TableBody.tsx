import React from 'react';
import { TableBodyP } from './types';

const TableBody = ({data}: TableBodyP) => {
    return (
        <tbody>
            {data.map(({tr, td: {data, ...tdProps}}) => (
            <tr {...tr}>
                <td {...tdProps}>{data}</td>
            </tr>
            ))}
        </tbody>
    )
}

export default TableBody;