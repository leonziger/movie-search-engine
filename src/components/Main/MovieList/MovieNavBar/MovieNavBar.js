import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import {MoviesContext} from '../../../MoviesProvider';
import './MovieNavBar.css';

const useStyles = makeStyles({
  pagination: {
    paddingBottom: '10px'
  }
});

export const MovieNavBar = () => {
  const { filter, totalPages, totalResults, changePage } = useContext(MoviesContext);
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="body2" color="textPrimary" align="center">
        Найдено {totalResults} результатов
      </Typography>

      <Pagination
        className={classes.pagination}
        page={filter.page}
        count={totalPages}
        variant="outlined"
        shape="rounded"
        onChange={changePage}
      />
    </Container>
  );
};
