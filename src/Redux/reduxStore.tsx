import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";


let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    sidebar: SidebarReducer

})



export const store = createStore(rootReducer);

/*export type RootStateType = ReturnType<typeof reducers>*/
export type ReduxStoreType = typeof store;
export type ReduxStateType = ReturnType<typeof rootReducer> ;


