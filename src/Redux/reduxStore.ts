import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";


/*export type ReduxStoreType = typeof store;*/
export type ReduxStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
(window as any).store = store



