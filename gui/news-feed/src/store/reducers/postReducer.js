const initState = {
    posts: [
        {
            link: "xxx",
            title: "mamad",
            content: "salam mamad",
            id: 1,
            picture: "https://picsum.photos/200/300",
            video: ""

        },
        {
            link: "xxx",
            title: "ali",
            content: "salam ali",
            id: 2,
            picture: "",
            video: "https://www.youtube.com/watch?v=oUFJJNQGwhk"
        },
        {
            link: "xxx",
            title: "reza",
            content: "salam reza",
            id: 3,
            picture: "",
            video: "https://www.youtube.com/watch?v=oUFJJNQGwhk"
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
