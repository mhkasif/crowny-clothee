

import React, { Component } from 'react'
import CustomButton from '../CustomButton/CustomButton';
import '../../styles/cart-dropdown.scss'
export default class CartDropdown extends Component {
    render() {
        return (
            <div className='cart-dropdown'>
            <div className="cart-items">
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>

            </div>
        )
    }
}
