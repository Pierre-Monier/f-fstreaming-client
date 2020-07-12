import React, { useState, useEffect } from 'react';
import { CardContent, useMediaQuery, Grid, Card, Typography, useTheme } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import MovieChoice from '../movie-choice/MovieChoice';
import { store } from '../../redux/general/store';
import Player from '../player/Player';

const DetailMovie = props => {
    
    const [videosrc, setVideosrc] = useState(props.src.videos[0].path);
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    useEffect(() => {
        store.dispatch({ type: 'ADDSRC', data: props.src})
    }, [props, videosrc]);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const handleSrcChange = newsrc => {
        setVideosrc(newsrc)
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <Grid item xs={12}>
            <Fade top >
                <Card>
                    <CardContent>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item lg={2} xs={12}className="flex-center">
                                <Typography gutterBottom variant="h4" component="h2" className="movies-title flex-center text-center">
                                    {props.general.name}
                                </Typography>
                            </Grid>
                            { isLarge ?
                            <>
                                <Grid item lg={1} xs={12}className="flex-center detail-info">
                                    <Typography variant="overline" color="textSecondary" component="p">
                                        ACTEURS
                                    </Typography>
                                </Grid>
                                <Grid item lg={2} xs={12}className="flex-center">
                                    <Typography variant="h6" component="p" className="text-center">
                                        {props.general.acteurs}
                                    </Typography>
                                </Grid>
                                <Grid item lg={1} xs={12}className="flex-center detail-info">
                                    <Typography variant="overline" color="textSecondary" component="p">
                                        REALISATEURS
                                    </Typography>
                                </Grid>
                                <Grid item lg={2} xs={12}className="flex-center">
                                    <Typography variant="h6" component="p" className="text-center">
                                        {props.general.realisateur}
                                    </Typography>
                                </Grid>
                                <Grid item lg={1} xs={12}className="flex-center detail-info">
                                    <Typography variant="overline" color="textSecondary" component="p">
                                        TAGS
                                    </Typography>
                                </Grid>
                                <Grid item lg={1} xs={12}className="flex-center">
                                    <Typography variant="h6" component="p">
                                        {props.general.tags}
                                    </Typography>
                                </Grid>
                                <Grid item lg={1} xs={12}className="flex-center detail-info">
                                    <Typography variant="overline" color="textSecondary" component="p">
                                        RUNNING TIME
                                    </Typography>
                                </Grid>
                                <Grid item lg={1} xs={12}className="flex-center">
                                    <Typography variant="h6" component="p">
                                        {props.general.duree}
                                    </Typography>
                                </Grid>
                                <Grid item lg={3} xs={12}className="flex-center pt-single">
                                    <Typography variant="body1" color="textPrimary" component="p">
                                        {props.general.resume}
                                    </Typography>
                                </Grid>
                            </>
                            : null }
                            <Grid item lg={9} xs={12}className="flex-center">
                                <Grid container spacing={1}>
                                    <Grid item xs={12} className="flex-center">
                                        <MovieChoice videos={props.src.videos} videoChange={handleSrcChange}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Player subtitles={props.src.subtitles} src={videosrc}/>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Fade>
        </Grid>
    )
}

export default DetailMovie;