import axios from 'axios';


export class LocalStorage {
    getAuthorisationKey() {
        let key = window.localStorage.getItem('authKey');
        let params = {};
        let header = {};
        axios.get('/accounts/signup/', params, null)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        return key;
    }
}
