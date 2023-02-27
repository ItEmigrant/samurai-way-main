import React from 'react';
import {CommonUserType} from "./UserContainer";



export const Users = (props: CommonUserType) => {
    return  <div>
            {
                props.stateUsersPages.map(u=><div key={u.id}> </div>)
            }
        </div>
};

