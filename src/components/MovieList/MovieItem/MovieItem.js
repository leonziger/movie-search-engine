import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Link, Typography} from '@material-ui/core';
import './MovieItem.css';

export const MovieItem = (props) => {

   // const Write = (props) => console.log(props);

    const useStyles = makeStyles({
        root: {
            maxWidth: 350,
            marginBottom: '20px'
        },
        media: {
            backgroundImage: 'url(../../../camera.png)',
            backgroundSize: 'contain',
            height: '320px',
            maxWidth: '250px',
            margin: '0 auto'
        },
    });

    const classes = useStyles();

    const decodeGenres = (array) => {
        let items = '', cuttedItems = '';
        array.forEach((item) => {
            props.genres.forEach((element)=>{
                if (element.id === item ) {
                    cuttedItems += element.name.toLowerCase() + ', ';
                }
            });
        });
        items = cuttedItems.slice(0, -2);
        return items;
    };

    return (
        <Link className="cardWrapper" underline="none" href={props.movie.id} onClick={props.showMovie}>
            <Card className={classes.root} variant="outlined">
                {/*{Write(props)}*/}
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
                            {props.movie.overview.length > 0 ? props.movie.overview : "К сожалению, краткое описание фильма на русском языке, отсутствует."}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};
