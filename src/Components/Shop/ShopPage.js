import React, { Component } from "react";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import SHOP_DATA from "./shopData";

export default class Shop extends Component {
  state = { collections: SHOP_DATA };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}
