const initState = {
    myAccount: {
        username: "",
        password: "",
    },
    account: {

    },
    accounts: {

    },
    error: ""
};


function accountReducer(state = initState, action) {
    switch (action.type) {
        case 'SIGN_IN':

        case "DELETE_POST":
            alert(action.type+ " " +action.id);
            return (
                state
            );
    }
    return state
}

export default accountReducer;
