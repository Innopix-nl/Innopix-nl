//-- React Standard
import React, { Component } from "react";
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

//-- Custom
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import { movieActions } from '../../_actions';
import { apiConstants } from '../../_constants/api.constants';

//-- CSS for Material
const styles = theme => ({
    root: {
        maxWidth: '100%',
        margin: '0 auto',
    },
    paddingBox: {
        padding: theme.spacing(2)
    },
    loaderImg: {
        margin: '0 auto',
        display: 'block',
        width: '100%'
    },
    media: {
        height: 140,
    },
});


class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: {},
        };
    }

    // //-- Will need to fetch user data
    componentDidMount() {
        const { dispatch } = this.props;
        let obj = {};

        dispatch(movieActions.getMoviesList(apiConstants.GET_MOVIE_LIST, obj));
    }

    /*
     * componentWillReceiveProps - Whenever Props change, it will call and store data
     * update the state values with new props values, this method will get called whenever any change happens to props values
     */
    componentWillReceiveProps(props) {
        if (props.getMoviesList) {
            if (props.getMoviesList.getMoviesList) {
                this.setState({
                    movies: props.getMoviesList.getMoviesList
                });
            }
        }
    }


    render() {
        return (
            <div id="wrapper">
                <Header />

                <main id="main">
                    <section id="services" className="services">
                        <div className="container">

                            <div className="section-title" data-aos="fade-up">
                                <h2>Movies List</h2>
                                <p>Dummy Movies Listing from the API</p>
                            </div>

                            <div className="row">
                                {
                                    this.state.movies != undefined && this.state.movies.length > 0 ? this.state.movies.map((movies, index) => {
                                        return (
                                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                                    <img src={movies.image.medium} alt="" />
                                                    <h4 className="title"><a href="">{movies.name}</a></h4>
                                                    <p className="description">{movies.summary}</p>
                                                    <Link className="get-started" target="_blank" to={"/movie-details/" + movies.id}>Movie Details</Link>

                                                </div>
                                            </div>
                                        );
                                    }) :
                                        <tr>
                                            <td colSpan="5" className="noRecordFound">No Movie Found</td>
                                        </tr>
                                }
                            </div>

                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { getMoviesList, language } = state;
    return {
        getMoviesList,
        language
    };
}

const connectedMovies = compose(withStyles(styles), connect(mapStateToProps))(Movies);
export { connectedMovies as Movies };