
import React, { useReducer, useContext } from 'react';
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
    LOGOUT_USER,
    TOGGLE_SIDEBAR,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
}
    from "./action_06"

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    token: null,
    location: '',
    showSidebar:false,
};

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

const AppContext_06 = React.createContext();

const AppProvider_06 = ({ children }) => {
    const [state, dispatch] = useReducer(reducer_06, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT });
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT });
        }, 3000);
    }

    const addUserToLocalStorage = ({ user, token, location }) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        localStorage.setItem('location', location);
    };
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('location');
    };

    //Register
    const axiosRegister = async ({ currentUser, endPoint, alertText }) => {
        try {
            const data = await axios.post(
                `/api/v1/auth_06/${endPoint}`,
                currentUser
            );
            return data;
        }
        catch (err) {
            console.log(err);
        }
    };

    const registerUser = async ({ currentUser, endPoint,
        alertText }) => {
        dispatch({ type: REGISTER_USER_BEGIN });
        try {
            const data = await axiosRegister({
                currentUser,
                endPoint,
                alertText,
            });
            console.log('register data', data);
            const { user, token, location } = data;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: { user, token, location, alertText },
            });
        }
        catch (err) {
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { msg: err.response.data.msg },
            });
            console.log(err);
        }
        clearAlert();
    };

    //Login
    const axiosLogin = async ({ currentUser, endPoint, alertText }) => {
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

    const LoginUser = async ({ currentUser, endPoint,
        alertText }) => {
        dispatch({ type: LOGIN_USER_BEGIN });
        try {
            const data = await axiosLogin({
                currentUser,
                endPoint,
                alertText,
            });
            console.log('Login data', data)
            const { user, token, location } = data;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: { user, token, location, alertText },
            });
            addUserToLocalStorage({ user, token, location });
        }
        catch (err) {
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: { msg: err.response.data.msg },
            })
            console.log(err);
        }
        clearAlert();
    }

    const axiosUPDATE = async ({ currentUser, endPoint, alertText }) => {
        try {
            const { data } = await axios.post(
                `/api/v1/auth_06/profile`,
                currentUser
            );
            return data;
        }
        catch (err) {
            console.log(err);
        }
    };

    const updateUser = async ({ currentUser, endPoint,
        alertText }) => {
        dispatch({ type: UPDATE_USER_BEGIN });
        try {
            const data = await axiosUPDATE({
                currentUser,
                endPoint,
                alertText,
            });
            console.log('UPDATE data', data)
            const { user, token, location } = data;
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: { user, token, location, alertText },
            });
            addUserToLocalStorage({ user, token, location });
        }
        catch (err) {
            dispatch({
                type: UPDATE_USER_ERROR,
                payload: { msg: err.response.data.msg },
            })
            console.log(err);
        }
        clearAlert();
    }


    const logoutUser = async () => {
        dispatch({ type: LOGOUT_USER });
        removeUserFromLocalStorage();
    };

    const toggleSidebar=()=>{
        dispatch({ type: TOGGLE_SIDEBAR });
    }

    return (
        <AppContext_06.Provider value={{
            ...state,
            displayAlert,
            clearAlert,
            registerUser,
            LoginUser,
            logoutUser,
            toggleSidebar,
            updateUser,
        }}>
            {children}
        </AppContext_06.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext_06);
}


export { AppProvider_06, initialState, useAppContext }