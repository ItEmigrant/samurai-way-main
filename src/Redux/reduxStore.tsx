import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    sidebar: SidebarReducer

})

export let store = createStore(reducers);

/*export type RootStateType = ReturnType<typeof reducers>*/
export type ReduxStoreType = typeof store;

