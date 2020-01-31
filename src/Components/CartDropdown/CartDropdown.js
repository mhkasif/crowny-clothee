import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import "../../styles/cart-dropdown.scss";
import { selectCartItems } from "../../redux/selectors/cartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from '../../redux/actions/cartActions';

const CartDropdown = ({ cartItems,dispatch, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {

          dispatch(toggleCartHidden())
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
