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
    throw new Error(`no such action ${action.type}`);
}

export default reducer_06;