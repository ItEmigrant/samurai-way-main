export type postsType = {
    id: number
    message: string
    likeCount: number
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


}

export type  profilePageType = {
    posts: Array<postsType>
}

export type  dialogPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}

export let state: stateType = {
    profilePage: {
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
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Hello Bro!"},
            {id: 3, message: "Have a nice day!"},
            {id: 4, message: "Yo!"},
            {id: 5, message: ":-)!"}
        ]
    }
}