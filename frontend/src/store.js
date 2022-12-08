import { createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer ,productDetailReducer } from './reducers/ProductReducer'
import {cartReducer} from './reducers/cartReducer'
import {userLoginReducer} from './reducers/userReducer'
const reducer=combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer,
    cart:cartReducer,
    userLogin: userLoginReducer
})
const cartItemsFromStorage=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')) :[]

const loginUserInfoFromStorage= localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):[]

const initialState={
    cart:{cartItems:cartItemsFromStorage},
    userLogin:{userInfo:loginUserInfoFromStorage}

}

const middleware=[thunk]


const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store 