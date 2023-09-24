import {usersType} from "../../Redux/Users/UsersReducer";

export const updateObjectInArray = (items: usersType[], itemId: number, objPropName: keyof usersType, newObjProps: Partial<usersType>) => {
    return items.map(u => u[objPropName] === itemId ? {...u, ...newObjProps} : u)
}