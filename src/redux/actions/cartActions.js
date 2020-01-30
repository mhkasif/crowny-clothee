
import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../constants/cartConstants';

export const toggleCartHidden=()=>({
    type:TOGGLE_CART_HIDDEN
})

export const addItem=item=>({
    type:ADD_ITEM,
    payload:item
})