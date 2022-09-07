import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Columns from '../components/Columns.js';
import data from '../components/mock-data.json';
import {useMemo} from "react";
import {useRowSelect} from "react-table";
import {useTable} from "react-table/src";

export default function Home() {

    const columns = useMemo(() => Columns, []);
    // const data = useMemo(() => data, []);
    const data = [
        {
            "id": "1001",
            "name": "Hasan",
            "phone": "01677701647",
            "email": "ragibhasan894@gmail.com",
            "address": "117 East Rajabazar, Dhaka",
            "created_at": "2022-09-07 11:07:09"
        },
        {
            "id": "1002",
            "name": "Ragib",
            "phone": "01677701647",
            "email": "ragibhasan894@gmail.com",
            "address": "117 East Rajabazar, Dhaka",
            "created_at": "2022-09-07 11:07:09"
        },
        {
            "id": "1003",
            "name": "Rouzex",
            "phone": "01677701647",
            "email": "ragibhasan894@gmail.com",
            "address": "117 East Rajabazar, Dhaka",
            "created_at": "2022-09-07 11:07:09"
        }
    ];

    const reactTable = useTable({
        columns,
        data
    });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = reactTable;

    return (
        <table {...getTableProps()}>
            <thead>
            {
                headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {
                            row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })
                        }
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}
