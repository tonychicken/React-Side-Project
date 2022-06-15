
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
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    
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


    //Register
    const axiosRegister = async ({currentUser,endPoint,alertText}) => {
        try {
            const  data  = await axios.post(
                `/api/v1/auth_06/${endPoint}`,
                currentUser
            );
            return data;
        }
        catch (err) {
            console.log(err);
        }
    };

    const registerUser = async({currentUser,endPoint,
        alertText}) => {
            dispatch({type:REGISTER_USER_BEGIN});
            try {
                const data = await axiosRegister({
                    currentUser,
                    endPoint,
                    alertText,
                });
                console.log('register data', data);
                const{user,token,location}=data;
                dispatch({
                    type:REGISTER_USER_SUCCESS,
                    payload:{user,token,location,alertText},
                });
            }
            catch (err) {
                dispatch({
                    type:REGISTER_USER_ERROR,
                    payload:{msg:err.response.data.msg},
                });
                console.log(err);
            }
    }

    //Login
    const axiosLogin = async ({currentUser,endPoint,alertText}) => {
        try {
            const { data } = await axios.post(
                `/api/v1/auth_06/${endPoint}`,
                currentUser
            );
            return data;
        }
        catch (err) {
            console.log(err);
        }
    };

    const LoginUser = async({currentUser,endPoint,
        alertText}) => {
            dispatch({type:LOGIN_USER_BEGIN});
            try {
                const data = await axiosLogin({
                    currentUser,
                    endPoint,
                    alertText,
                });
                console.log('Login data', data)
                const{user,token,location}=data;
                dispatch({
                    type:LOGIN_USER_SUCCESS,
                    payload:{user,token,location,alertText},
                });
            }
            catch (err) {
                dispatch({
                    type:LOGIN_USER_ERROR,
                    payload:{msg:err.response.data.msg},
                })
                console.log(err);
            }
            clearAlert();
    }

    return (
        <AppContext_06.Provider value={{ 
            ...state,
            displayAlert,
            clearAlert,
            registerUser,
            LoginUser} }>
            {children}
        </AppContext_06.Provider>
    )
}

const useAppContext=()=>{
    return useContext(AppContext_06);
}


export {AppProvider_06,initialState,useAppContext}