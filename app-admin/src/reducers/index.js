import authReducer from './auth.reducers';
import userReducer from './user.reducers';
import productReducer from './product.reducers';
import ordersReducer from './orders.actions';
import categoryReducer from './category.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    orders: ordersReducer,
    category: categoryReducer
})

export default rootReducer;