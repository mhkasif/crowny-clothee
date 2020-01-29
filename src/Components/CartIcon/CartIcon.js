


import React, { Component } from 'react'
import '../../styles/cart-icon.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/logo/shopping-bag.svg'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/actions/cartActions';
 class CartIcon extends Component {
     render() {
const {toggleCartHidden}=this.props

        return (
            <div onClick={toggleCartHidden} className='cart-icon'>
<ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>

            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)( CartIcon);