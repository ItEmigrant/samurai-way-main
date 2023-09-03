export type AppInitialStateType = {
    initialized: boolean
}
let initialState = {
    initialized: false
}
const AppReducer = (state: AppInitialStateType = initialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case "SET-initialized-success":
            return {
                ...state,
                initialized: true

            }
        default:
            return state;
    }
};

export default AppReducer;

export const setInitializedSuccess = () => ({
    type: "SET-initialized-success"
} as const)




//types
export type AppActionsType = ReturnType<typeof setInitializedSuccess>