import React, { useState, useEffect, useCallback } from 'react';
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
  const [ currentMovie, setCurrentMovie ] = useState({});
  const [ error, setError ] = useState(false);
  const classes = useStyles();

  const searchSingleMovie = (id) => {
    moviesApi.fetchSingleMovie(id, {
      params: {
        'language': 'ru-RU'
      }
    })
      .then(response => {
        setCurrentMovie(response.data);
        console.log(response.data);
        console.log(currentMovie);
      })
      .catch(error => setError(true));
  };

  const handleMediaError = () => {
    setIsFailMedia(true);
  };

  useEffect(() => {
    searchSingleMovie(id);
  },[]);

  return (
    <Container>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          src={isFailMedia ? errorImage : currentMovie.backdrop_path || currentMovie.poster_path}
          component="img"
          onError={handleMediaError}
        />

        <CardContent className={classes.content}>
          <Typography variant="h4" color="textPrimary" component="h3" className={classes.overview}>
            {currentMovie.title}
          </Typography>

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Популярность: </b>{currentMovie.popularity} ({currentMovie.vote_count} / {currentMovie.vote_average})
          </Typography>

          {currentMovie.release_date &&
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Дата релиза: </b>{convertDate(currentMovie.release_date)}
            </Typography>
          }

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Оригинальное названиe: </b>{currentMovie.original_title}
          </Typography>

          <Typography variant="body2" color="textPrimary" component="p">
            <b>Язык оригинала: </b>{currentMovie.original_language==='en' ? "английский" : currentMovie.original_language}
          </Typography>

          {currentMovie.genres.length > 0 &&
          <Typography variant="body2" color="textPrimary" component="p" className={classes.overview}>
            <b>Жанр: </b>{currentMovie.genres}
          </Typography>
          }

          {/*<Typography variant="body2" color="textPrimary" component="p">*/}
            {/*<b>Обзор: </b>{currentMovie.overview.length > 0 ? currentMovie.overview : "К сожалению, обзор фильма на русском языке отсутствует."}*/}
          {/*</Typography>*/}
        </CardContent>
      </Card>
    </Container>
  );
};
