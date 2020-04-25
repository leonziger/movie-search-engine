import React, { useState, useContext } from 'react';
import { Container, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { convertDate } from '../../../../helpers/convertDate';
import { MoviesContext, MoviesProvider } from '../../../MoviesProvider';
import errorImage from '../MovieItem/camera.png';

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
  const { movies, genres } = useContext(MoviesContext);
  const [ isFailMedia, setIsFailMedia ] = useState(false);
  const moviesResult = movies.filter(film => Number(film.id) === Number(id));
  const currenMovie = moviesResult[0];
  const classes = useStyles();

  const handleMediaError = () => {
    setIsFailMedia(true);
  };

  return (
    <MoviesProvider>
      <Container>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            src={isFailMedia ? errorImage : currenMovie.backdrop_path || currenMovie.poster_path}
            component="img"
            onError={handleMediaError}
          />
          <CardContent className={classes.content}>
            <Typography variant="h4" color="textPrimary" component="h3" className={classes.overview}>
              {currenMovie.title}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Популярность: </b>{currenMovie.popularity} ({currenMovie.vote_count} / {currenMovie.vote_average})
            </Typography>
            {currenMovie.release_date &&
              <Typography variant="body2" color="textPrimary" component="p">
                <b>Дата релиза: </b>{convertDate(currenMovie.release_date)}
              </Typography>
            }
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Оригинальное названиe: </b>{currenMovie.original_title}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Язык оригинала: </b>{currenMovie.original_language==='en' ? "английский" : currenMovie.original_language}
            </Typography>
            {currenMovie.genre_ids.length > 0 &&
            <Typography variant="body2" color="textPrimary" component="p" className={classes.overview}>
              <b>Жанр: </b>{currenMovie.genre_ids.map((id) => genres[id]).join(', ')}
            </Typography>
            }
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Обзор: </b>{currenMovie.overview.length > 0 ? currenMovie.overview : "К сожалению, обзор фильма на русском языке отсутствует."}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </MoviesProvider>
  );
};
