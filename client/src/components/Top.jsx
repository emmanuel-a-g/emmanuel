import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: '#16213e',
    // color: props => props.color, you can add a prop to make a style
  },
});

function Top(props) {
  const myStyles = useStyles();
  return (
    <div>
    <Grid container xs={12} sm={6}>
      <h3 className={myStyles.root}>About Me Section</h3>
    </Grid>
    </div>
  );
}

export default Top;