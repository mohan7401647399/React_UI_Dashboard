import React from 'react';
import DataTable from 'react-data-table-component';

export default function Tabledata() {
    const columns = [
        {
            name: "Invoive ID",
            selector: row => row.Invoice_ID,
            style: { color: "blue" }
        },
        {
            name: "Date",
            selector: row => row.date
        },
        {
            name: "Customer",
            selector: row => row.customer
        },
        {
            name: "Payable Amount",
            selector: row => row.payable_amount
        },
        {
            name: "Paid Amount",
            selector: row => row.paid_amount
        },
        {
            name: "Due",
            selector: row => row.due
        }
    ];
    const data = [
        {
            id: 1,
            Invoice_ID: "#AHGA68",
            date: "23/09/2022",
            customer: "Jacob Marcus",
            payable_amount: "$100",
            paid_amount: "$000",
            due: "$000"
        },
        {
            id: 1,
            Invoice_ID: "#AHGA68",
            date: "23/09/2022",
            customer: "Jacob Marcus",
            payable_amount: "$100",
            paid_amount: "$000",
            due: "$000"
        },
        {
            id: 1,
            Invoice_ID: "#AHGA68",
            date: "23/09/2022",
            customer: "Jacob Marcus",
            payable_amount: "$100",
            paid_amount: "$000",
            due: "$000"
        },
        {
            id: 1,
            Invoice_ID: "#AHGA68",
            date: "23/09/2022",
            customer: "Jacob Marcus",
            payable_amount: "$100",
            paid_amount: "$000",
            due: "$000"
        },
        {
            id: 1,
            Invoice_ID: "#AHGA68",
            date: "23/09/2022",
            customer: "Jacob Marcus",
            payable_amount: "$100",
            paid_amount: "$000",
            due: "$000"
        },
        {
            id: 1,
            Invoice_ID: "#AHGA68",
            date: "23/09/2022",
            customer: "Jacob Marcus",
            payable_amount: "$100",
            paid_amount: "$000",
            due: "$000"
        },
        {
            id: 1,
            Invoice_ID: "#AHGA68",
            date: "23/09/2022",
            customer: "Jacob Marcus",
            payable_amount: "$100",
            paid_amount: "$000",
            due: "$000"
        },
        {
            id: 1,
            Invoice_ID: "#AHGA68",
            date: "23/09/2022",
            customer: "Jacob Marcus",
            payable_amount: "$100",
            paid_amount: "$000",
            due: "$000"
        }
    ]
    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
            >
            </DataTable>
        </div >
    )
}
