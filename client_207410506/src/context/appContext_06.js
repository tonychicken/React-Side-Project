
import React,{useReducer,useContext} from 'react';
import reducer_06 from './reducer_06';
import { DISPLAY_ALERT,CLEAR_ALERT } from './action_06';
import axios from 'axios';

const initialState = {
    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:''
  };


const AppContext_06=React.createContext();

const AppProvider_06=({children})=>{
    
    const [state,dispatch]= useReducer(reducer_06,initialState);

    const displayAlert=() => {
        dispatch({type: DISPLAY_ALERT});
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout ( () => {  
            dispatch({type: CLEAR_ALERT});  
        },3000);
    }

    const registerUser = async({currentUser,endPoint,alertText}) => {
        const { data } = await axios.post(`/api/v1/auth_06/${endPoint}`);
        console.log("12345678",data);
    }

    return (
        <AppContext_06.Provider value={{ ...state,displayAlert,clearAlert,registerUser} }>
            {children}
        </AppContext_06.Provider>
    )
}

const useAppContext=()=>{
    return useContext(AppContext_06);
}


export {AppProvider_06,initialState,useAppContext}