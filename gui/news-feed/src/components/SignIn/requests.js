import API from "../../store/API";

export default function signIn(username, password) {
    let body = {
        username, password
    }
    return API({ 
        method: 'POST',
        url: 'token/',
        data: body
    }).then((res) => {
        let {access, refresh} = res.data;
        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refresh);
    })
}