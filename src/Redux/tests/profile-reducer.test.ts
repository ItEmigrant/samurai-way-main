import ProfileReducer, {addPostActionCreator, deletePostActionCreator, profilePageType} from "../ProfileReducer";

let State: profilePageType = {
    messageForNewPosts: "",
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 1},
        {id: 2, message: "My first post!", likeCount: 25},
        {id: 3, message: "Post!", likeCount: 5},
        {id: 4, message: "yo!", likeCount: 20}
    ],
    profile: null,
    status: ''
}
test('length array in Profile State', () => {
    let action = addPostActionCreator('IT-Emigrant is cool!!');

    let newState = ProfileReducer(State, action);
    expect(newState.posts.length).toBe(5)
});

test('add new post in Profile State', () => {
    let action = addPostActionCreator('IT-Emigrant is cool!!');

    let newState = ProfileReducer(State, action);

    expect(newState.posts[4].message).toBe('IT-Emigrant is cool!!')

});
test('length array in Profile State after delete', () => {
    let action = deletePostActionCreator(1);

    let newState = ProfileReducer(State, action);

    expect(newState.posts.length).toBe(3)

});

test('after tri deleting wrong ID length most be correct', () => {
    let action = deletePostActionCreator(10);

    let newState = ProfileReducer(State, action);

    expect(newState.posts.length).toBe(4)

})
