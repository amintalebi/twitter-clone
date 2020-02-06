import API from "./API";


export class LocalStorage {

    async getAuthorisationKey() {
        let key = window.localStorage.getItem('authKey');
        let config = {
            headers: {
              "Content-Type": "application/json"
            },
            body: {
                "token": key
            }
        }
        let res = await API.get('verify-token', config)
        console.log(res)
        return key;
    }
}



