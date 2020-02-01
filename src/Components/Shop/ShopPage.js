import React from "react";
import CollectionsOverview from "../CollectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
import Collection from "../../Pages/Collection/Collection";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
