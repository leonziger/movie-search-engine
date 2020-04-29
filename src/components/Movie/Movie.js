import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { convertDate } from '../../helpers/convertDate';
import * as moviesApi from '../../api/movies/index';
import errorImage from '../Main/MovieList/MovieItem/camera.png';
import { Loader } from '../Loader';

const useStyles = makeStyles({
  container: {
    minHeight: '80vh'
  },
  root: {
    display: 'flex',
    margin: '10px 0 0',
    boxShadow: 'none'
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
    marginTop: '20px'
  }
});

export const Movie = () => {
  const { id } = useParams();
  const [ isFailMedia, setIsFailMedia ] = useState(false);
  const [ movie, setCurrentMovie ] = useState({});
  const [ error, setError ] = useState(false);
  const [ isLoading, setLoading ] = useState(false);
  const classes = useStyles();

  const handleMediaError = () => {
    setIsFailMedia(true);
  };

  const separateDigit = (digit) => {
    return (String(digit).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  };

  const transformCompanies = (array) => {
    let result = '';

    array.production_companies.map(company => {
      company.origin_country.length > 0 ?
        result = result + company.name + `(${company.origin_country}), `
      :
        result = result + company.name + ', ';

      return result;
    });

    return result.slice(0,-2);
  };

  const searchSingleMovie = (id) => {

    setLoading(true);

    setTimeout(() => {
      moviesApi.fetchSingleMovie(id)
        .then(response => {
          setLoading(false);
          setCurrentMovie(response.data);
        })
        .catch(error => setError(true));
    }, 200);
  };

  useEffect(() => {
    searchSingleMovie(id);
  }, [id]);

  return (
    <Container className={classes.container}>
      {isLoading ?
        <Loader/>
        :
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            src={isFailMedia ? errorImage : movie.backdrop_path || movie.poster_path || errorImage}
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

            {!!movie.budget &&
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Бюджет: </b> ${separateDigit(movie.budget)}
            </Typography>
            }

            {movie.release_date &&
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Дата релиза: </b>{convertDate(movie.release_date)}
            </Typography>
            }

            <Typography variant="body2" color="textPrimary" component="p">
              <b>Оригинальное названиe: </b>{movie.original_title} {movie.homepage &&
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer">перейти на сайт</a>}
            </Typography>

            <Typography variant="body2" color="textPrimary" component="p">
              <b>Язык оригинала: </b>{movie.original_language === 'en' ? "английский" : movie.original_language}
            </Typography>

            {movie.belongs_to_collection && movie.belongs_to_collection.name &&
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Коллекция: </b>{movie.belongs_to_collection.name}
            </Typography>
            }

            {movie.genres && movie.genres.length > 0 &&
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Жанр: </b>{movie.genres.map((genre) => genre.name).join(', ')}
            </Typography>
            }

            {movie.overview && movie.overview.length > 0 &&
            <Typography variant="body2" color="textPrimary" component="p" className={classes.overview}>
              <b>Обзор: </b>{movie.overview}
            </Typography>
            }

            {movie.production_companies && movie.production_companies.length > 0 &&
            <Typography variant="body2" color="textPrimary" component="p">
              <b>Кинокомпании: </b>{transformCompanies(movie)}
            </Typography>
            }
          </CardContent>

          {movie.belongs_to_collection &&
          <CardMedia
            className={classes.media}
            src={isFailMedia ? errorImage : movie.belongs_to_collection.backdrop_path || movie.belongs_to_collection.poster_path || errorImage}
            component="img"
            onError={handleMediaError}
          />
          }

        </Card>
      }
    </Container>
  );
};
