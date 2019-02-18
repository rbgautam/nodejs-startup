import 'whatwg-fetch';
import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

export function getUsers(){
    return get('users');
}

export function deleteUser(id){
    console.log(`deleting user id : ${id}`);
    return del(`users/${id}`);
}

const del = (url) => {
    const request =  new Request(baseUrl+url,{ method:'DELETE'});
    return fetch(request).then(onSuccess, onError);
};


function get(url){
    return fetch(baseUrl + url).then(onSuccess, onError);
}    

const onSuccess = (response) =>{return response.json()};
const onError = (error) => { console.log(error)}; //eslint-disable-line no-console