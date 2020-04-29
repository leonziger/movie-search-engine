import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { cutString } from '../../../../helpers/cutString';
import { MoviesContext } from '../../../MoviesProvider';
import errorImage from './camera.png';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  root: {
    height: '100%',
  },
  media: {
    backgroundSize: 'contain',
    height: '320px',
    maxWidth: '250px',
    margin: '20px auto 0'
  },
  content: {
    flexGrow: 1
  }
});

export const MovieItem = ({ movie }) => {
  const [ isFailMedia, setIsFailMedia ] = useState(false);
  const { genres } = useContext(MoviesContext);
  const classes = useStyles();

  const handleMediaError = () => {
    setIsFailMedia(true);
  };

  return (
    <Link to={'/movie/' + movie.id} className={classes.link}>
      <Card className={classes.root} variant="outlined" square>
        <CardMedia
          className={classes.media}
          src={isFailMedia ? errorImage : movie.backdrop_path || movie.poster_path || errorImage}
          component="img"
          onError={handleMediaError}
        />

        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" color="textPrimary" component="h2">
            {movie.title} {movie.release_date && `(${new Date(movie.release_date).getFullYear()})`}
          </Typography>

          {movie.genre_ids.length > 0 &&
          <Typography variant="subtitle2" color="textSecondary" component="p">
            <b>Жанр: </b>{movie.genre_ids.map((id) => genres[ id ]).join(', ')}
          </Typography>
          }

          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview.length > 0 ? cutString(movie.overview, 100) : "К сожалению, обзор фильма на русском языке отсутствует."}
          </Typography>
        </CardContent>
      </Card>
    </Link>
    );
  };
