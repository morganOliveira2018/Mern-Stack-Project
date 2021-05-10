import { authConstants } from './constants';
import axios from '../helpers/axios';

export const login = (user) => {
    console.log(user);

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post('/admin/signin', {
            ...user
        })

        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token); // salvar o token no armazenamento local para caso o usuario venha recarregar a página novamente no futuro
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCESS,
                payload: {
                    token, user
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                });
            }
        }
        /*dispatch({ 
            type: authConstants.LOGIN_REQUEST,
            payload: {
                ...user
            } 
        });*/
    }
}


export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (token) { // token == true
            const user = JSON.parse(localStorage.getItem('user'));
            console.log('user');
            dispatch({
                type: authConstants.LOGIN_SUCESS,
                payload: {
                    token, user
                }
            });
        } else { // Failed to login user
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Failed to login' }
            });
        }
    }
}

export const signout = () => {
    return async dispatch => {
        dispatch({ type: authConstants.LOGOUT_REQUEST });
        const res = await axios.post('/admin/signout');
        if (res.status === 200) {
            localStorage.clear();
            dispatch({
                type: authConstants.LOGOUT_SUCESS
            })
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}

