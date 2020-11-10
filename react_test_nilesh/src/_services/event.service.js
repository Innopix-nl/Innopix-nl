import config from 'config';
import { authHeader,history } from '../_helpers';
import axios from 'axios';

export const eventService = {
    getUserEventList,
};

//-- getEventsList
function getUserEventList(apiName, eventData) {
    let token = JSON.parse(sessionStorage.getItem('token'));    
    return axios({
        method: 'POST',
        url: `${config.apiUrl+apiName}`,
        headers: { 'Content-Type': 'application/json', 'Authorization': token},
        data: eventData
    }).then(handleResponse);
}

function handleResponse(response) {

    //console.log('response', response);

    if (response.status == 200||response.status == 201) {
        return response;
    } else {
        const error = response;
        return Promise.reject(error);
    }

}

