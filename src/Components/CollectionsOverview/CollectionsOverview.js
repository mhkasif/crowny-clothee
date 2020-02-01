import React from "react";
import "../../styles/collection-overview.scss";
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  selectCollectionsForPreview } from '../../redux/selectors/shopSelectors';
const CollectionsOverview = ({collections}) => (
  <div className="collections-overview">
    {collections&&collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
);

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
  })

export default connect(mapStateToProps)(CollectionsOverview);
