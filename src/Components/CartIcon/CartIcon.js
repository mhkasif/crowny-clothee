import React, { Component } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/logo/shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/actions/cartActions";
import { selectCartItems, selectCartItemsCount } from "../../redux/actions/cartSelectors";
import "../../styles/cart-icon.scss";
class CartIcon extends Component {
  render() {
    const { toggleCartHidden, itemCount } = this.props;

    return (
      <div onClick={toggleCartHidden} className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
