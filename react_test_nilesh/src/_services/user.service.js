import { authHeader, history } from '../_helpers';
import axios from 'axios';
import config from 'config';

export const userService = {
    userLogin,
    withToken,
    updatePic,
    withOutToken,
    searchResultDetail,
    getlatlongfrompostcode
    // getUserDetail,
    // updateUserDetails,
    // activateUser,
    // userResgister,
};


function userLogin(entity, userData) {
    return axios({
        method: 'POST',
        url: `${config.apiUrl+entity}`,
        data: userData
    }).then((handleResponse) =>{
        if (handleResponse.data.token) {
            sessionStorage.setItem('user', JSON.stringify(handleResponse.data.user));
            sessionStorage.setItem('token', JSON.stringify(handleResponse.data.token));
        }
        return handleResponse;
    } );    
};










function handleResponse(response) {    
    if (response.status == 200 || response.status == 201) {
        return response;
    } else {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
}

function withToken(entity, userData) {
    let tokenObj = JSON.parse(sessionStorage.getItem("token"))
    return axios({
        method: 'POST',
        url: `${config.apiUrl+entity}`,
        headers: { 'Content-Type': 'application/json', 'Authorization': tokenObj },
        data: userData
    }).then((handleResponse) => {
        
        return handleResponse;
    });
};


function withOutToken(entity, userData) {
    return axios({
        method: 'POST',
        url: `${config.apiUrl+entity}`,
        data: userData
    }).then(handleResponse);
};


function searchResultDetail(entity, userData) {
    return axios({
        method: 'GET',
        url: `${config.apiUrl+entity}`,  
         headers: { 'Content-Type': 'application/json', bookid: userData.bookid, longitude1 : userData.longitude1, latitude1 : userData.latitude1  },
    }).then(handleResponse);
};


// function userResgister(entity, userData) {
//     return axios({
//         method: 'POST',
//         url: `${config.apiUrl+entity}`,
//         data: userData
//     }).then(handleResponse);
// };

// function activateUser(entity, userData) {
//     return axios({
//         method: 'POST',
//         url: `${config.apiUrl+entity}`,
//         data: userData
//     }).then(handleResponse);
// };

// function getUserDetail(entity, id) {
//     let tokenObj = JSON.parse(sessionStorage.getItem("token"))
//     return axios({
//         method: 'POST',
//         url: `${config.apiUrl+entity}`,
//         headers: { 'Content-Type': 'application/json', 'Authorization': tokenObj },
//         data: id
//     }).then((handleResponse) => {
//         return handleResponse;
//     });
// };

// function updateUserDetails(entity, userData) {
//     let tokenObj = JSON.parse(sessionStorage.getItem("token"))
//     return axios({
//         method: 'POST',
//         url: `${config.apiUrl+entity}`,
//         headers: { 'Content-Type': 'application/json', 'Authorization': tokenObj },
//         data: userData
//     }).then(handleResponse);
// };




function updatePic(entity, file, image_name) {
    
    let formData = new FormData();
    formData.append(image_name, file);
    return axios({
        method: 'POST',
        url: `${config.apiUrl+entity}`,
        data: formData
    }).then((handleResponse) => {
        return handleResponse;
    });
}


function getlatlongfrompostcode(userData){
    return axios({
        method: 'POST',
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAVJtvx-0oJEugKH7kJ6Nu_YKYZNiCox48&components=postal_code:`+userData.postcode,
    }).then(handleResponse);

}







