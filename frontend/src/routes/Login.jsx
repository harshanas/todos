import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function Login() {
    return (
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >

      <Grid item xs={3}>
        <Card >
        
          <CardContent>
            <Typography variant="h3" component="div" gutterBottom>
              T O D O S
            </Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField fullWidth label="E-mail" id="email" required />
              <TextField fullWidth label="Password" id="password" required />
            </Box>
            <Button variant="contained">Login</Button>
          </CardContent>
        
        </Card>
      </Grid>   
      
    </Grid>
      
    );
  }