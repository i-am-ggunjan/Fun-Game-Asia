import React from 'react'
import Header from "../../../layouts/header";
import { Box, Grid, Typography, TextField, Button, Table, TableBody, TableCell, TableRow } from '@mui/material';
import { BiBorderRadius } from 'react-icons/bi';

const Currrentgame = () => {
  return (
    <>
    <Header />
    <Box sx={{ p: 4 }}>
      <Typography  variant="h5" gutterBottom>
        Current Game id: 182765
      </Typography>
      
      <div style={{ background: "#ffffff", padding: "25px", BiBorderRadius: "10px",boxshadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 0px 0px rgba(0, 0, 0, 0.23)" }}>
      <Typography variant="body1" gutterBottom>
        Numbers with total bid amount.
      </Typography>
      
      <Table style={{background:"#fff8f2"}} sx={{ mb: 2, border: '1px solid #ccc' }}>
        <TableBody>
          <TableRow>
            {[...Array(10).keys()].map((number) => (
              <TableCell key={number} align="center">
                {number}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
      </div>

      <Box style={{ background: "#ffffff", padding: "25px", BiBorderRadius: "10px",boxshadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 0px 0px rgba(0, 0, 0, 0.23)" }} sx={{ mt: 4 }}>
        <Typography style={{textAlign:"center",fontSize:"1.2rem",fontWeight:"bold"}} variant="body1" gutterBottom>
          Timer (Seconds): 23
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Total Users: 0</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Spinner number" variant="outlined" defaultValue="8" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Center Image Stop* (enter 7 for 2x, 8 for 4x)"
              variant="outlined"
              defaultValue="2"
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary">
            Update
          </Button>
        </Box>
      </Box>
    </Box>
    </>
  
  );
}

export default Currrentgame;