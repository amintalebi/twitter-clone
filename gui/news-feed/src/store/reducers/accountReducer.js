const initState = {
    myAccount: {
        name: "احمد",
        userName: "ahhhmad",
        avatar: "https://picsum.photos/300/300",
        background: "https://picsum.photos/450/300",
    },
    account: {
        name: "محسن",
        userName: "ahhhmad",
        avatar: "https://picsum.photos/300/300",
        background: "https://picsum.photos/450/300",
    },
    accounts: [

    ],
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
