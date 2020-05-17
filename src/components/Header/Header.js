import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, AppBar, Toolbar } from '@material-ui/core';
import logo from './logo.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: '55px',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#fff',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
  },
  span: {
    display: 'block',
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  }
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={ {background: '#375466'}}>
        <Container>
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            <NavLink exact to="/" className={classes.link}>
              <img src={logo} className={classes.logo} alt="logo" />
              <span className={classes.span}>Киноафиша</span>
            </NavLink>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <NavLink to="/movies" className={classes.link}>Популярные фильмы</NavLink>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <NavLink to="/soap" className={classes.link}>Популярные Сериалы</NavLink>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <NavLink to="/search" className={classes.link}>Поиск</NavLink>
          </Typography>

        </Toolbar>
      </Container>
      </AppBar>
    </div>
  );
};
