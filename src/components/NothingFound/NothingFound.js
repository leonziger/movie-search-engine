import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export const NothingFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Typography align="center" color="error" variant="h6" justify="center" component="p">
          Ошибка: информация не найдена!
        </Typography>
      </Container>
    </div>
  );
};
