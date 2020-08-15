import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { store } from '../../redux/general/store';
import Fade from 'react-reveal/Fade';

const Thumb = props => {
    const HIDE = 'Cacher';
    const [read, setRead] = useState(false);
    const [more, setMore] = useState(false);
    const theme = useTheme();
//  °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    const useStyles = makeStyles(() => ({
        link: {
            textDecoration: 'none',
            '& *': {
                textDecoration: 'none'
            }
        },
        bg:{
            backgroundColor: "#eee",
            [theme.breakpoints.down('md')]: {
                height: '200px'
            }
    
        }
      }));
    const classes = useStyles();
//  °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return (
        <Grid item xs={12} sm={6} lg={3}className={`p-cardmovie ${process.env.REACT_APP_MOVIES_CLASS}`}>
            <Fade bottom cascade>
                <Card>
                    <CardActionArea>
                        <Link to={`/movies/detail/${props.data.id}`} className={classes.link} onClick={() => store.dispatch({ type: 'ADDSINGLE', data: props.data})}>
                            <CardMedia
                            className={classes.bg}
                            image={props.data.image_name}
                            src='img'
                            title={props.data.name}
                            />
                        </Link>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} className="flex-center">
                                    <Typography gutterBottom variant="h4" component="h2" className="movies-title">
                                        {props.data.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className="flex-center" onClick={() => {setMore(!more)}}>
                                    <Typography variant="overline" color="textSecondary" component="p">
                                        {more ? HIDE : 'En savoir plus...'}
                                    </Typography>
                                </Grid>
                                { more ? 
                                <>
                                <Grid item xs={6} className="flex-start">
                                    <Typography variant="overline" color="textSecondary" component="p">
                                        ACTEURS
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className="flex-end">
                                    <Typography variant="overline" color="textSecondary" component="p">
                                        REALISATEUR
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className="flex-start">
                                    <Typography variant="h6" component="p">
                                        {props.data.acteurs}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className="flex-end">
                                    <Typography variant="h6" component="p">
                                        {props.data.realisateur}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className="flex-start">
                                    <Typography variant="overline" color="textSecondary" component="p">
                                        GENRE(S)
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className="flex-end">
                                    <Typography variant="overline" color="textSecondary" component="p">
                                        DURÉE
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className="flex-start">
                                    <Typography variant="h6" component="p">
                                        {props.data.tags}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className="flex-end">
                                    <Typography variant="h6" component="p">
                                        {props.data.duree}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className="flex-start">
                                    <Typography variant="overline" color="textSecondary" component="p">
                                        ANNÉE
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className="flex-end">
                                    <></>
                                </Grid>
                                <Grid item xs={6} className="flex-start">
                                    <Typography variant="h6" component="p">
                                        {props.data.year}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className="flex-center" onClick={() => {setRead(!read)}}>
                                    <Typography variant="overline" color="textSecondary" component="p">
                                        {read ? HIDE : 'Lire le résumé'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} className={read ? 'show' : 'hidden'}>
                                    <Typography variant="body1" color="textPrimary" component="p">
                                        {props.data.resume}
                                    </Typography>
                                </Grid>
                                </>
                                : null }
                            </Grid>
                        </CardContent>
                    </CardActionArea>                
                </Card>
            </Fade>
        </Grid>
  );



}
export default Thumb;