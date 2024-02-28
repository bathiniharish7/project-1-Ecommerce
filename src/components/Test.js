import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
function YourComponent() {
  const [open, setOpen] = useState(false); // State to manage message visibility

  const handleAddToCart = () => {
    setOpen(true); // Open message when "Add to Cart" is clicked
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false); // Close message
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleAddToCart}>
        Add to Cart
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000} // Adjust the duration as needed
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Message position
      >
        <Alert elevation={6} variant="filled" onClose={handleClose} severity="success">
          Item added to cart!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default YourComponent;
