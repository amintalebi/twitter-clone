const initState = {
    posts: [
        {
            title: "mamad",
            content: "salam mamad",
            id: 1,
        },
        {
            title: "ali",
            content: "salam ali",
            id: 2,
        },
        {
            title: "reza",
            content: "salam reza",
            id: 3,
        }
    ]
};


function postReducer(state = initState, action) {
    switch (action.type) {
        case "DELETE_POST":
            alert(action.type+ " " +action.id);
            return (
                state
            );
    }
    return state
}

export default postReducer;
