import React, { Component } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/logo/shopping-bag.svg";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/actions/cartActions";

import "../../styles/cart-icon.scss";
import { selectCartItemsCount } from "../../redux/selectors/cartSelectors";
import { createStructuredSelector } from 'reselect';
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
const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
