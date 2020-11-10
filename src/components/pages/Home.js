import React, { useState, useEffect,lazy,Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodesList } from '../../actions/auth';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
const Listing = lazy(() => import('../helpers/Listing'))

const Home = () => {
    const dispatch = useDispatch();
    const [listing, setListing] = useState([]);
    /*
    * useSelector Allows you to extract data from the Redux store state,
    * using a selector function.
    */
    const { fetchEpisodes } = useSelector(
        state => ({
            fetchEpisodes: state.fetchEpisodes,
        })
    );
    useEffect(() => {
        if (fetchEpisodes.type === "FETCH_EPISODES_SUCCESS") {
            setListing(fetchEpisodes.payload);
        }
    }, [fetchEpisodes]);
    useEffect(() => {
        dispatch(fetchEpisodesList());
    }, [dispatch]);

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
                <Suspense fallback={ <CircularProgress />}>
                    <Listing listing={listing} />
                </Suspense>
                
            </main>

        </React.Fragment>
    );
}
export default Home;
