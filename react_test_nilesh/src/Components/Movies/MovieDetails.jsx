import React, { Component, Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Row, FormGroup, Label } from 'reactstrap';
import { connect } from 'react-redux';
//-- Custom
import { movieActions } from '../../_actions';
import { apiConstants } from '../../_constants/api.constants';



class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.toggleAccordion = this.toggleAccordion.bind(this);

        this.state = {
            accordion: [false, false, false],
        };

        this.state = {
            movieDetails: {}
        }
    }

    //-- It will toggle 
    toggleAccordion(tab) {
        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            accordion: state,
        });
    }

    //-- Will need to fetch movie data
    componentDidMount() {
        const { dispatch,match } = this.props;
        let obj = {};
        obj.id = match.params;
        
        dispatch(movieActions.getMovieDetails(apiConstants.GET_MOVIE_DETAIL, obj));
    }

        /*
     * componentWillReceiveProps - Whenever Props change, it will call and store data
     * update the state values with new props values, this method will get called whenever any change happens to props values
     */
    componentWillReceiveProps(props) {
       
        if (props.getMovieDetails) {
            if (props.getMovieDetails.getMovieDetails) {
                this.setState({
                    movieDetails: props.getMovieDetails.getMovieDetails
                });
            }
        }
    }


    render() {

        const movieDetails = this.state.movieDetails;
        const { siteConstants } = this.props.language;

        return (
            <Fragment>
                <div id="wrapper">
                    {/* <Header /> */}

                    <main id="main">

                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <Card className="mb-2">
                                        <CardHeader>
                                            <Row>
                                                <Col xs="9">
                                                    <strong>{movieDetails.name}</strong> <br />
                                                    {movieDetails.status}<br />
                                                    {movieDetails.premiered}<br />
                                                    {movieDetails.language}
                                                    <img src={movieDetails.image} alt="" />
                                                </Col>
                                                <Col xs="3">
                                                    {movieDetails.officialSite} <br />
                                                    {movieDetails.weight}
                                                </Col>
                                            </Row>

                                        </CardHeader>
                                    </Card>
                                    <Card className="mb-2">
                                        <CardHeader>
                                            {siteConstants.GEN_DESCRIPTION}
                                        </CardHeader>
                                        <CardBody>
                                            <div className="row">
                                               {movieDetails.summary}
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    </main>

                </div>
                {/* <!-- /.container-fluid --> */}
            </Fragment>
        );
    }
}

//-- Here we are adding Reducer names, so it can be get data from reducers using store
function mapStateToProps(state) {
    const { language,getMovieDetails } = state;
    return {
        language,
        getMovieDetails
    };
}

const connectedMovieDetails = connect(mapStateToProps)(MovieDetails);
export { connectedMovieDetails as MovieDetails };