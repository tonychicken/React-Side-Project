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

const reducer_06 = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertText: 'please provide all value',
            alertType: 'danger'

        }
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertText: '',
            alertType: ''

        }
    }
    if (action.type === REGISTER_USER_BEGIN) {
        return {...state,isLoading:true}
    }
    if (action.type === REGISTER_USER_SUCCESS) {
        return {
            ...state,
            isLoading:false,
            showAlert:true,
            alertText:action.payload.alertText,
            alertType:'success',
            user:action.payload.user,
            token:action.payload.token,
            location:action.payload.location,
        }
    }

    if (action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            isLoading:false,
            showAlert:true,
            alertText:action.payload.msg,
            alertType:'danger',
        }
    }
    if (action.type === LOGIN_USER_BEGIN) {
        return {
            ...state,
            isLoading:true,
        }
    }
    if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...state,
            isLoading:false,
            showAlert:true,
            alertText:action.payload.alertText,
            alertType:'success',
            user:action.payload.user,
            token:action.payload.token,
            location:action.payload.location,
        }
    }
    if (action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            isLoading:false,
            showAlert:true,
            alertText:action.payload.msg,
            alertType:'danger',
        }
    }

    throw new Error(`no such action ${action.type}`);
}

export default reducer_06;