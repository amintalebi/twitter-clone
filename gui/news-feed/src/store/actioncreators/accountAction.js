import {LocalStorage} from "../LocalStorage";
import API from "../API";

export const signIn = (userName, password) => {
    return ((dispatch, getState) => {

        console.log(getState())
        dispatch({type: 'SIGN_IN', myAccount: null});
        // or
        dispatch({type: 'RESPONSE', response: null});
    });
};

export const signUp = (name, userName, email, password) => {
    return ((dispatch, getState) => {
        let config = {
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                "username": userName,
                "password": password,
                "first_name": name,
                "email": email
            }
        };
        console.log(config)
        API({ method: 'POST', url: 'accounts/signup/', headers: config.headers, data: config.body })
            .then(function (response) {
                dispatch({ type: 'RESPONSE', response: {result: true, error: null} });
            })
            .catch(function (error) {
                console.log(error)
                dispatch({ type: 'RESPONSE', response: {result: false, error: error} });
            })
    });
};

export const forgotPassword = (email) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({type: 'RESPONSE', response: null});
    });
};

export const editAccount = (account) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({type: 'RESPONSE', account: null});
    });
};

export const deleteAccount = () => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({type: 'DELETE_ACCOUNT'});
    });
};

export const loadAccount = (id) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({type: 'LOAD_ACCOUNT', account: null});
    });
};


export const loadAccounts = (email) => {
    return ((dispatch, getState) => {
        //async codes
        console.log(getState())
        dispatch({type: 'LOAD_ACCOUNTS', response: null});
    });
};


