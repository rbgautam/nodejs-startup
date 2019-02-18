import 'whatwg-fetch';


export function getUsers(){
    return get('users');
}

function get(url){
    return fetch(url).then(onSuccess, onError);
}    

const onSuccess = (response) =>{return response.json()};
const onError = (error) => { console.log(error)}; //eslint-disable-line no-console