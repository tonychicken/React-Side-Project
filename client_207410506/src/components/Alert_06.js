import React from 'react';

import{useAppContext} from '../context/appContext_06'

const Alert_06 = () =>{
    const {alertText,alertType} =useAppContext();
    return(
        <div className={`alert alert-${alertType}`}>
            {alertText}
        </div>
    )
}

export default Alert_06;