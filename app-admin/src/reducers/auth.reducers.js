import { authConstants } from "../actions/constants";

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false, // autenticar
    authenticating: false, // auteticando
    loading: false,
    error: null,
    message: ''

}

export default (state = initState, action) => {
    console.log(action);

    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true // Aqui essa requisitando autenticação para API mandar a resposta
            }
            break;
        case authConstants.LOGIN_SUCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true, // finalizou o LOGIN com SUCESSO.
                authenticating: false // falso pois já passou pelo processo autenticando o usuario
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.LOGOUT_SUCESS:
            state = {
                ...initState,
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
    }
    return state;
}

