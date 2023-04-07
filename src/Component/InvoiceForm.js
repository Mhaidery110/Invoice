import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

function InvoiceForm(props) {
  const [open, setOpen] = React.useState(false);
    const [data, setData] = useState({
        qty: "",
        price: "",
        taxper: "",
        discper: ""
    })

    function HandleChange(event){
        const {name, value} = event.target;
        setData(prevValue =>{
            return {
                ...prevValue,
                [name] : value
            }
        });
    };

    function handleSubmit(event){
      props.onSubmit(data);
      event.preventDefault();
      
      handleClose();
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div style={{padding:"20px"}}>
    <form>
      <Button variant="contained" color='primary' onClick={handleClickOpen}>
          Add New Details
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Details</DialogTitle>
      <div>
      <TextField
          style={{ width: "500px", margin: "20px" }}
            type="text"
            label="quantity"
            id="outlined-size-small"
            name='qty'
            onChange={HandleChange}
          />
      </div>
      <div>
      <TextField
          style={{ width: "500px", margin: "20px" }}
            type="text"
            label="Price"
            id="outlined-size-small"
            name='price'
            onChange={HandleChange}
          />
      </div>
      <div>
      <TextField
          style={{ width: "500px", margin: "20px" }}
            type="text"
            label="Tax%"
            id="outlined-size-small"
            name='taxper'
            onChange={HandleChange}
          />
      </div>
      <div>
      <TextField
      style={{ width: "500px", margin: "20px" }}
        type="text"
        label="Discount%"
        id="outlined-size-small"
        name='discper'
        onChange={HandleChange}
      />
      </div>
     
      <div>
      <DialogActions>
    <Button variant='contained' color='success' onClick={handleSubmit} >Add New Invoice</Button>
           
          </DialogActions>
  </div>
  </Dialog>
  </form>
  </div>
    
  )
}

export default InvoiceForm
