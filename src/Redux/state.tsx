export type postsType = {
    id: number
    message: string
    likeCount: number
}
export type friendsType = {
    id: number
    friend: string
}
export type dialogsType = {
    id: number
    name: string
}
export type messagesType = {
    id: number
    message: string
}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogPageType
    sidebar: sidebarType
}
export type  profilePageType = {
    messageForNewPosts: string
    posts: Array<postsType>
}
export type  dialogPageType = {
    newMessagePostText: string
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
export type sidebarType = {
    friends: Array<friendsType>
}

export type storeType = {
    _state: stateType
    updateNewPostMessageText: (messageDialogs: string) => void
    addNewMessagePost:() => void
    _onChange:() => void
    subscribe:(observer: () => void) => void
    addStatePostMessage:() => void
    updateNewPostText:(postMessage: string) => void
    getState:() => stateType
}

export const store: storeType = {
    _state: {
        profilePage: {
            messageForNewPosts: "",
            posts: [
                {id: 1, message: "Hi, how are you?", likeCount: 1},
                {id: 2, message: "My first post!", likeCount: 25},
                {id: 3, message: "Post!", likeCount: 5},
                {id: 4, message: "yo!", likeCount: 20}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Bogdan"},
                {id: 2, name: "Adrian"},
                {id: 3, name: "Artur"},
                {id: 4, name: "Artem"},
                {id: 5, name: "Alisa"}
            ],
            newMessagePostText: "",
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Hello Bro!"},
                {id: 3, message: "Have a nice day!"},
                {id: 4, message: "Yo!"},
                {id: 5, message: ":-)!"}
            ]
        },
        sidebar: {
            friends: [
                {id: 1, friend: "Andre"},
                {id: 2, friend: "Oleg"},
                {id: 3, friend: "Alex"}
            ]
        }
    },
    _onChange() {
        console.log('state changed')
    },
    addStatePostMessage() {

        const newPost: postsType = {
            id: new Date().getTime(),
            message: this._state.profilePage.messageForNewPosts,
            likeCount: 1
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPosts = "";

        this._onChange();

    },
    addNewMessagePost() {
        const newMessage: messagesType = {
            id: new Date().getTime(),
            message: this._state.dialogsPage.newMessagePostText
        };
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessagePostText = "";

        this._onChange();
    },
    updateNewPostText(postMessage: string) {
        this._state.profilePage.messageForNewPosts = postMessage;
        this._onChange();
    },
    updateNewPostMessageText(messageDialogs: string) {
        this._state.dialogsPage.newMessagePostText = messageDialogs;
        this._onChange();
    },
    subscribe(observer) {
        this._onChange = observer;

    },

    getState() {
        return this._state
    }
}


/*export let state: stateType = {
    profilePage: {
        messageForNewPosts: "",
        posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 1},
            {id: 2, message: "My first post!", likeCount: 25},
            {id: 3, message: "Post!", likeCount: 5},
            {id: 4, message: "yo!", likeCount: 20}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Bogdan"},
            {id: 2, name: "Adrian"},
            {id: 3, name: "Artur"},
            {id: 4, name: "Artem"},
            {id: 5, name: "Alisa"}
        ],
        newMessagePostText: "",
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Hello Bro!"},
            {id: 3, message: "Have a nice day!"},
            {id: 4, message: "Yo!"},
            {id: 5, message: ":-)!"}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, friend: "Andre"},
            {id: 2, friend: "Oleg"},
            {id: 3, friend: "Alex"}
        ]
    }
}*/

/*export let onChange = () => {}*/

/*export const addStatePostMessage = () => {

    const newPost: postsType = {
        id: new Date().getTime(),
        message: state.profilePage.messageForNewPosts,
        likeCount: 1
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.messageForNewPosts = "";

    onChange();

}*/

/*export const addNewMessagePost = () => {
    const newMessage: messagesType = {
        id: new Date().getTime(),
        message: state.dialogsPage.newMessagePostText
    };
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessagePostText = "";

    onChange();
}*/

/*export const updateNewPostText = (postMessage: string) => {
    state.profilePage.messageForNewPosts = postMessage;
    onChange();
}*/

/*export const updateNewPostMessageText = (messageDialogs: string) => {
    state.dialogsPage.newMessagePostText = messageDialogs;
    onChange();
}*/

/*export const subscribe = (observer: () => void) => {
    onChange = observer;

}*/
