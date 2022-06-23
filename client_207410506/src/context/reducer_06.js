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
import { initialState } from "./appContext_06"

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
    if (action.type === LOGOUT_USER) {
        return {
            ...initialState,
        }
    }
    if (action.type === TOGGLE_SIDEBAR) {
        return {
            ...state,
            showSidebar:!state.showSidebar,
        }
    }
    if (action.type === UPDATE_USER_BEGIN) {
        return { ...state, isLoading: true };
      }
      if (action.type === UPDATE_USER_SUCCESS) {
        return {
          ...state,
          isLoading: false,
          token: action.payload.token,
          user: action.payload.user,
          location: action.payload.location,
          showAlert: true,
          alertType: 'success',
          alertText: 'User Profile Updated!',
        };
      }
      if (action.type === UPDATE_USER_ERROR) {
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        };
      }
    throw new Error(`no such action ${action.type}`);
}

export default reducer_06;