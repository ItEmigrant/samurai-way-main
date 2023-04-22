import {combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";


/*export type ReduxStoreType = typeof store;*/
export type ReduxStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer

})

export const store = legacy_createStore(rootReducer);
(window as any).store = store



