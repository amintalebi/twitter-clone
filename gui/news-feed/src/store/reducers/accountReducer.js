const initState = {
    myAccount: {
        username: "",
        password: "",
    },
    account: {

    },
    accounts: {

    },
    message: {
        result: null,
        error: "",
    }
};


function accountReducer(state = initState, action) {
    switch (action.type) {
        case 'RESPONSE':
            return (
                {
                    ...state,
                    message: action.response,
                }
            );
        case "DELETE_POST":
            alert(action.type+ " " +action.id);
            return (
                state
            );
    }
    return state
}

export default accountReducer;
