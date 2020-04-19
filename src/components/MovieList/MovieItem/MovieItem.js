import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import { genres} from "../../../api/movies";
import './MovieItem.css';

export const MovieItem = (props) => {

    const useStyles = makeStyles({
        root: {
            maxWidth: 350,
            marginBottom: '20px'
        },
        media: {
            backgroundImage: 'url(../../../camera.png)',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '320px',
            maxWidth: '250px',
            margin: '0 auto'
        },
    });

    const classes = useStyles();

    const decodeGenres = (array) => {
        let items = '', cuttedItems = '';
        array.forEach((item) => {
            genres.forEach((element)=>{
                if (element.id === item ) {
                    cuttedItems += element.ru_name.toLowerCase() + ', ';
                }
            });
        });
        items = cuttedItems.slice(0, -2);
        return items;
    };

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    alt=""
                    image={props.movie.backdrop_path || props.movie.poster_path}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" color="textPrimary" component="h2">
                        {props.movie.title}
                        { isNaN(props.movie.release_date) ? " (" + new Date(props.movie.release_date).getFullYear()+")" : '' }
                    </Typography>
                    { props.movie.genre_ids.length>0
                        ?
                            <Typography variant="subtitle2" color="textSecondary" component="p">
                                <b>Жанр:&nbsp;</b>{decodeGenres(props.movie.genre_ids)}
                            </Typography>
                        :
                            ''
                    }
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.movie.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
