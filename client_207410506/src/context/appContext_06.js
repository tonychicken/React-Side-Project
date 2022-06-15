
import React,{useReducer,useContext} from 'react';
import reducer_06 from './reducer_06';
import axios from 'axios';
import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS
    }
from "./action_06"

const initialState = {
    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:'',
    user:'',
    token:'',
    location:'',
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
    const axiosRegister = async ({currentUser,endPoint,alertText}) => {
        try {
            const { data } = await axios.post(
                `/api/v1/auth_06/${endPoint}`,
                currentUser
            );
            console.log('register data', data)
            return {data};
        }
        catch (err) {
            console.log(err);
        }
    };

    const registerUser = async({currentUser,endPoint,
        alertText}) => {
            try {
                const data = await axiosRegister({
                    currentUser,
                    endPoint,
                    alertText,
                });
                console.log('register data', data)
            }
            catch (err) {
                console.log(err);
            }
    }

    return (
        <AppContext_06.Provider value={{ ...state,displayAlert,clearAlert,registerUser,axiosRegister} }>
            {children}
        </AppContext_06.Provider>
    )
}

const useAppContext=()=>{
    return useContext(AppContext_06);
}


export {AppProvider_06,initialState,useAppContext}