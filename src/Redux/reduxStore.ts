import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
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


const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
export const store = legacy_createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    compose(applyMiddleware(thunkMiddleware)
    )));
//export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

(window as any).store = store




