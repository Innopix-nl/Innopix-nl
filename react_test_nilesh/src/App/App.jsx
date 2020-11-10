import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { Home } from '../Components/Home';
import { Movies, MovieDetails } from '../Components/Movies';
import { alertActions } from '../_actions';

class App extends Component {

    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    render() {
        const { alert } = this.props;
        return (
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/home" component={Home} />
                            <Route path="/movies-list" component={Movies} />
                            <Route path="/movie-details/:id" component={MovieDetails} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 