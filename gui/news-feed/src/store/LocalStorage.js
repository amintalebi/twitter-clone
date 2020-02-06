import API from "./API";


export class LocalStorage {

    static async getAuthorisationKey() {
        let key = window.localStorage.getItem('authKey');
        if (key) {
            let config = {
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    "token": key
                }
            };
            let res = await API.get('verify-token', config)
            console.log(res)
            if (res.status) {
                return key
            }
        }
        let config = {
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                "token": key
            }
        };
        let res = await API.get('verify-token', config)
        console.log(res)
        if (res.status) {
            return key
        }
        return key;
    }
}



