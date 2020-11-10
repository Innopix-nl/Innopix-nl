import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fetchEpisodeDetails } from '../../actions/auth';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    displayImg: {
        // margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));
const EpisodeDetails = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [episodeId, setEpisodeId] = useState(
        window.location.pathname.split("/").pop() || ''
    );
    const [episodeDetailData, setEpisodeDetailData] = useState({});
    /*
    * useSelector Allows you to extract data from the Redux store state,
    * using a selector function.
    */
    const { episodeDetails } = useSelector(
        state => ({
            episodeDetails: state.episodeDetails,
        })
    );
    useEffect(() => {
        return () => {
            setEpisodeDetailData({});
        }
    }, [])
    useEffect(() => {
        if (episodeDetails.type === "FETCH_EPISODES_DETAILS_SUCCESS") {
            setEpisodeDetailData(episodeDetails.payload);
        }
    }, [episodeDetails])
    useEffect(() => {
        dispatch(fetchEpisodeDetails(episodeId));
    }, [episodeId, dispatch])
    let imgSrc = Object.keys(episodeDetailData).length > 0 ? episodeDetailData.image !== null ? episodeDetailData.image.original : "https://source.unsplash.com/random" : "";
    let title = Object.keys(episodeDetailData).length > 0 ? episodeDetailData.name : "";
    let description = Object.keys(episodeDetailData).length > 0 ? episodeDetailData.summary !== null ? episodeDetailData.summary.replace(/<\/?[^>]+(>|$)/g, "") : "" : "";
    let season = Object.keys(episodeDetailData).length > 0 ? episodeDetailData.season !== null ? episodeDetailData.season : "" : "";
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Power Puff Girls
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <img src={imgSrc} alt="" className={classes.displayImg} />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Typography variant="h4" color="primary" align="justify">
                                {title}
                            </Typography>
                            <Typography gutterBottom={true} variant="body1" color="textPrimary" display="inline" align="justify">
                                Season:
                            </Typography>
                            <Typography gutterBottom={true} variant="body1" color='textPrimary' display="inline" align="justify">
                                {season}
                            </Typography>
                            {description !== "" ?
                                <React.Fragment>
                                    <Typography gutterBottom={true} variant="body1" color="textPrimary" align="justify">
                                        Description:
                                    </Typography>
                                    <Typography gutterBottom={true} variant="body1" color='textPrimary' align="justify">
                                        {description}
                                    </Typography>
                                </React.Fragment>
                                : ""
                            }


                        </Grid>
                    </Grid>

                </Container>
            </main>
        </React.Fragment>
    )
}

export default EpisodeDetails;