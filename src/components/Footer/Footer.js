import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Link, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black',
    minHeight: '30px',
    color: 'white'
  },
  link: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7em'
      },
  }
}));

export function Footer() {
  const classes = useStyles();

  return (
    <Paper variant="outlined" square className={classes.footer}>
      <Container>
        <Typography variant="h6" component="p" align="center" >
          <Link underline="none" href="/" className={classes.link}>Киноафиша. Copyright 2020</Link>
        </Typography>
      </Container>
    </Paper>
  );
};
