import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { convertDate } from '../../helpers/convertDate';
import * as moviesApi from '../../api/movies/index';
import errorImage from '../Main/MovieList/MovieItem/camera.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    margin: '10px 0 0'
  },
  media: {
    backgroundSize: 'contain',
    height: '300px',
    maxWidth: '200px',
    margin: '20px auto'
  },
  content: {
    flexGrow: 1,
    width: '100%'
  },
  overview: {
    marginBottom: '20px'
  }
});

export const Movie = () => {
  const { id } = useParams();
  const [ isFailMedia, setIsFailMedia ] = useState(false);
  const [ movie, setCurrentMovie ] = useState({});
  const [ error, setError ] = useState(false);
  const classes = useStyles();

  const handleMediaError = () => {
    setIsFailMedia(true);
  };

  const searchSingleMovie = (id) => {
    moviesApi.fetchSingleMovie(id, {
      params: {
        'language': 'ru-RU'
      }
    })
      .then(response => {
        moviesApi.transformMovie(response.data);
        setCurrentMovie(response.data);
      })
      .catch(error => setError(true));
  };

  useEffect(() => {
    searchSingleMovie(id);
  }, [id]);

  return (
    <Container>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          src={isFailMedia ? errorImage : movie.backdrop_path || movie.poster_path}
          component="img"
          onError={handleMediaError}
        />

        <CardContent className={classes.content}>
          <Typography variant="h4" color="textPrimary" component="h3" className={classes.overview}>
            {movie.title}
          </Typography>

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Популярность: </b>{movie.popularity} ({movie.vote_count} / {movie.vote_average})
          </Typography>

          {movie.budget &&
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Бюджет: </b>{movie.budget}$
            </Typography>
          }

          {movie.release_date &&
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Дата релиза: </b>{convertDate(movie.release_date)}
            </Typography>
          }

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Оригинальное названиe: </b>{movie.original_title}
          </Typography>

          {movie.homepage &&
          <Typography variant="body2" color="textPrimary" component="p">
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer">домашняя страница фильма</a>
          </Typography>
          }

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Язык оригинала: </b>{movie.original_language==='en' ? "английский" : movie.original_language}
          </Typography>

          {/*{movie.genres.length > 0 &&*/}
          {/*<Typography variant="body2" color="textPrimary" component="p" className={classes.overview}>*/}
            {/*<b>Жанр: </b>{movie.genres}*/}
          {/*</Typography>*/}
          {/*}*/}

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Обзор: </b>{movie.overview ? movie.overview : "К сожалению, обзор фильма на русском языке отсутствует."}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
