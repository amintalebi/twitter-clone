const initState = {
    myAccount: {

    },
    account: {

    },
    accounts: {

    },
};


function accountReducer(state = initState, action) {
    switch (action.type) {
        case "DELETE_POST":
            alert(action.type+ " " +action.id);
            return (
                state
            );
    }
    return state
}

export default accountReducer;
