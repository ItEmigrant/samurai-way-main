import React, {ComponentType, Suspense} from "react";
import {Preloader} from "../Common/Preloader/Preloader";
import { RouteComponentProps } from "react-router-dom";

export function withSuspense<T extends RouteComponentProps>(Component: ComponentType<T>) {
    return (props: T) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }
}
