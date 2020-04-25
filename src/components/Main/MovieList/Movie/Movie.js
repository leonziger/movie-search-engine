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
  const { searchSingleMovie } = useContext(MoviesContext);
  const singleMovie = searchSingleMovie(id);
  console.log('singleMovie', singleMovie);
  const [ isFailMedia, setIsFailMedia ] = useState(false);
  const classes = useStyles();

  const handleMediaError = () => {
    setIsFailMedia(true);
  };

  return (
    <MoviesProvider>
      <Container>
        <Card className={classes.root}>
          {/*<CardMedia*/}
            {/*className={classes.media}*/}
            {/*src={isFailMedia ? errorImage : singleMovie.backdrop_path || singleMovie.poster_path}*/}
            {/*component="img"*/}
            {/*onError={handleMediaError}*/}
          {/*/>*/}

          <CardContent className={classes.content}>
            {/*<Typography variant="h4" color="textPrimary" component="h3" className={classes.overview}>*/}
              {/*{singleMovie.title}*/}
            {/*</Typography>*/}

            {/*<Typography variant="body2" color="textPrimary" component="p">*/}
              {/*<b>Популярность: </b>{singleMovie.popularity} ({singleMovie.vote_count} / {singleMovie.vote_average})*/}
            {/*</Typography>*/}

            {/*{singleMovie.release_date &&*/}
              {/*<Typography variant="body2" color="textPrimary" component="p">*/}
                {/*<b>Дата релиза: </b>{convertDate(singleMovie.release_date)}*/}
              {/*</Typography>*/}
            {/*}*/}

            {/*<Typography variant="body2" color="textPrimary" component="p">*/}
              {/*<b>Оригинальное названиe: </b>{singleMovie.original_title}*/}
            {/*</Typography>*/}

            {/*<Typography variant="body2" color="textPrimary" component="p">*/}
              {/*<b>Язык оригинала: </b>{singleMovie.original_language==='en' ? "английский" : singleMovie.original_language}*/}
            {/*</Typography>*/}

            {/*{singleMovie.genre_ids.length > 0 &&*/}
            {/*<Typography variant="body2" color="textPrimary" component="p" className={classes.overview}>*/}
              {/*<b>Жанр: </b>{singleMovie.genre_ids.map((id) => genres[id]).join(', ')}*/}
            {/*</Typography>*/}
            {/*}*/}

            {/*<Typography variant="body2" color="textPrimary" component="p">*/}
              {/*<b>Обзор: </b>{singleMovie.overview.length > 0 ? singleMovie.overview : "К сожалению, обзор фильма на русском языке отсутствует."}*/}
            {/*</Typography>*/}
          </CardContent>
        </Card>
      </Container>
    </MoviesProvider>
  );
};
