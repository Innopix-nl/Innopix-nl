import config from 'config';
// import { authHeader,history } from '../_helpers';
import axios from 'axios';

export const movieService = {
    getMoviesList,
    getMovieDetails
};

//-- getEventsList
function getMoviesList(apiName, movieData) {
    let token = JSON.parse(sessionStorage.getItem('token'));
    return axios({
        method: 'GET',
        //url: `${config.apiUrl+apiName}`,
        url: `${apiName}`,
        headers: { 'Content-Type': 'application/json' },
        data: movieData
    }).then(handleResponse);
}

//-- getmoviedetails
function getMovieDetails(apiName, movieData) {

    return axios({
        method: 'GET',
        //url: `${config.apiUrl+apiName}`,
        url: `${apiName + movieData.id.id}`,
        headers: { 'Content-Type': 'application/json' },
        data: movieData
    }).then(handleResponse);
}

function handleResponse(response) {

    //console.log('response', response);

    if (response.status == 200 || response.status == 201) {
        return response;
    } else {
        const error = response;
        return Promise.reject(error);
    }

}

