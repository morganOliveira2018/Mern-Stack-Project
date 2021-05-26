import { categoryConstants } from '../actions/constants';

const initState = {
    categories: [],
    loading: false,
    error: null
}

/* buildNewCategories é uma funcao recursiva para atualizar os novos filhos que entram nas categorias */
const buildNewCategories = (categories, category) => {
    let myCategories = [];

    for (let cat of categories) {
        myCategories.push({
            ...cat,
            children: cat.children && cat.children.length > 0 ? buildNewCategories(cat.children, category) : []
        });
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            //console.log(action.payload.categories);
            break;
        case categoryConstants.ADD_NEW_CATEGORIES_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORIES_SUCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case categoryConstants.ADD_NEW_CATEGORIES_FAILURE:
            state = {
                ...initState
            }
            break;
    }
    return state;
}