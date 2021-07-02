import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core/';

const myStyles = makeStyles({
  nav: {
    backgroundColor: "#0f3460",
    color: "#e94560"
  }
})

function Nav({items}) {
  console.log('how many items:', items);
  const myColors = myStyles();
  return (
    <Grid container spacing={2} justify="center">
      <Grid container item className={myColors.nav}  xs={3} justify="center" alignItems="center" > <p>Hello</p> </Grid>
      <Grid container item className={myColors.nav}  xs={3} justify="center" alignItems="center" > <p>Hello</p> </Grid>
      <Grid container item className={myColors.nav}  xs={3} justify="center" alignItems="center" > <p>Hello</p> </Grid>
      <Grid container item className={myColors.nav}  xs={3} justify="center" alignItems="center" > <p>Hello</p> </Grid>
      <Grid container item className={myColors.nav}  xs={3} justify="center" alignItems="center" > <p>Hello</p> </Grid>
      <Grid container item className={myColors.nav}  xs={3} justify="center" alignItems="center" > <p>Hello</p> </Grid>
    </Grid>
  );
}

export default Nav; 