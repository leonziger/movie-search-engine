import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Link, Paper, Typography } from '@material-ui/core';
import { SearchForm } from '../SearchForm';

const useStyles = makeStyles({
  headline: {
  paddingTop: '10px',
  }
});

export const Header = () => {
  const classes = useStyles();

  return (
    <Paper elevation={1}>
      <Container>
        <Typography variant="h6" component="h1" color="textPrimary" align="center" className={classes.headline}>
          <Link color="primary" underline="none" href="/">Movie Search Engine</Link>
        </Typography>

        <SearchForm />
      </Container>
    </Paper>
  );
};
