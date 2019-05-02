import React from 'react';
import { Table } from 'reactstrap';
import TableHeader from './TableHeader';
import { TableDataP } from './types';
import TableBody from './TableBody';

const TableData = ({headerData, bodyData}: TableDataP) => {
    return (
        <Table>
            <TableHeader data={headerData}/>
            <TableBody data={bodyData}/>
        </Table>
    )
}
export default TableData;