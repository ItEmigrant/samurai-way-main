import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,

})

export let store= createStore(reducers);

/*export type RootStateType = ReturnType<typeof reducers>*/
export type ReduxStoreType = typeof store;

