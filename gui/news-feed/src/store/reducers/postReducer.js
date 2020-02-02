const initState = {
    post: {

    },
    posts: [
        {
            owner: {
                name: "اصغر",
                id: "asghar",
                icon: "https://picsum.photos/200/200"
            },
            chanelID: "",
            content: "عجب گیری کردیما",
            publishedDate: "2019/10/9",
            id: 1,
            media: {
                src: "https://www.youtube.com/watch?v=XoAPIpOZYA4",
                type: "video", // "" | "img" | "video" : component type
            },
        },
        {
            owner: {
                name: "ممد",
                id: "asghar",
                icon: ""
            },
            chanelID: "bamarefata",
            content: "خدایا شکرت",
            publishedDate: "2019/4/9",
            id: 2,
            media: null,
        },
        {
            owner: {
                name: "اصغر",
                id: "asghar",
                icon: "https://picsum.photos/210/210"
            },
            chanelID: "bahala",
            content: "بریم دور دور\n از اون زمان تا حالا",
            publishedDate: "2000/10/9",
            id: 3,
            media: {
                src: "https://picsum.photos/230",
                type: "img",
            },
        },
        {
            owner: {
                name: "اصغر",
                id: "asghar",
                icon: "https://picsum.photos/200/200"
            },
            chanelID: "",
            content: "عجب گیری کردیما",
            publishedDate: "2019/10/9",
            id: 4,
            media: {
                src: "https://picsum.photos/200/300",
                type: "img",
            },
        },
        {
            owner: {
                name: "ممد",
                id: "asghar",
                icon: ""
            },
            chanelID: "bamarefata",
            content: "خدایا شکرت",
            publishedDate: "2019/4/9",
            id: 5,
            media: null,
        },
        {
            owner: {
                name: "اصغر",
                id: "asghar",
                icon: "https://picsum.photos/210/210"
            },
            chanelID: "bahala",
            content: "بریم دور دور\n از اون زمان تا حالا",
            publishedDate: "2000/10/9",
            id: 6,
            media: {
                src: "https://picsum.photos/230",
                type: "img",
            },
        },
    ],
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
