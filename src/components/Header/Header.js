import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Link, Typography, AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={ {background: '#375466'}}>
        <Container>
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            <Link underline="none" href="/" style={ {color: '#fff'} }>Movie poster</Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link underline="none" href="/movies" style={ {color: '#fff'} }>Популярные фильмы</Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link underline="none" href="/tv" style={ {color: '#fff'} }>Популярные Сериалы</Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link underline="none" href="/search" style={ {color: '#fff'} }>Поиск</Link>
          </Typography>

        </Toolbar>
      </Container>
      </AppBar>
    </div>
  );
};
