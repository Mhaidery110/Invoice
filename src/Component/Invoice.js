import React, { useState } from 'react'
import InvoiceForm from './InvoiceForm'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Invoice() {

    const [datas, setDatas] = useState([])

    function getData(newdata){
        console.log("from parent", newdata);
        setDatas(prevvalue=>{
           return [...prevvalue, newdata ]
        });

    }

    function compute(){
        const totalBeforeDiscAndTax = datas.reduce((acc, curr) => {
            return  Number(curr.qty) * Number(curr.price)
          }, 0)
          return totalBeforeDiscAndTax
    }
    
  return (
    <div>
      <InvoiceForm onSubmit={getData} />
      <div>
      <TableContainer component={Paper}>
      <Table align="center" sx={{ maxWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  align="center">Quantity</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Tax%</TableCell>
            <TableCell align="center">Discount%</TableCell>
            <TableCell align="center">Tax</TableCell>
            <TableCell align="center">Discount</TableCell>
            <TableCell align="center">Total Price</TableCell>
            
          </TableRow>
        </TableHead>

        {
           datas.map((item, index)=>{
            return (
                <TableBody key={index}>
                    <TableRow  id={index}>
                        <TableCell contentEditable={true} align="center">{item.qty}</TableCell>
                        <TableCell  align="center">{item.price}</TableCell>
                        <TableCell  align="center">{item.taxper}</TableCell>
                        <TableCell  align="center">{item.discper}</TableCell>
                        <TableCell align="center">{compute() *  item.taxper/100}</TableCell>
                        <TableCell align="center">{compute() * item.discper/100}</TableCell>
                        <TableCell align="center">{compute() + (item.taxper/100 - item.discper/100)}</TableCell>
                    </TableRow>
                </TableBody>
            )
           })
        }
    </Table>
    </TableContainer>
    </div>
    </div>
  )
}

export default Invoice;
