import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'tokyo sushi tour',
    desc: 'Fascinating city of Japan',
    price: '$90',
  },
  {
    name: 'Niagara Falls',
    desc: 'A spectacular natural wonder ',
    price: '$150',
  },

 
];



export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $240
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
       
        <Grid item container direction="column" xs={12} sm={6}>
         
        
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
