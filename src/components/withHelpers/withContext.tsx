import React, {useContext} from "react";
import { GitApiContext } from '../gitApiContext';

export const withContext = (mapMethodsToProps: any) => (Wrapped: any) => {
    return (props: any) => {
        const gitApiContext = useContext(GitApiContext);
        const gitApiServiceProps = mapMethodsToProps(gitApiContext);

        return <Wrapped {...props} {...gitApiServiceProps} />
    }
}