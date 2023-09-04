import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";
import UsersReducer from "./Users/UsersReducer";
import AuthReducer, {AuthActionType} from "./AuthReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from "redux-form";
import AppReducer, {AppActionsReducerType} from "./AppReducer";


export type ReduxStateType = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, ReduxStateType, unknown, AppActionType>;
export type AppActionType = AuthActionType | FormAction | AppActionsReducerType;

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    App: AppReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

(window as any).store = store




