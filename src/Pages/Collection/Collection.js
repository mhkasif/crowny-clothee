

 import React from 'react';
import { connect } from 'react-redux';
import { selectCollection} from '../../redux/selectors/shopSelectors';
import '../../styles/collection.scss'
import CollectionItem from '../../Components/CollectionItem/CollectionItem';
 const Collection = ({collections}) => {
const {title,items}=collections
     return (
      <div className="collection-page">
          <h2 className='title'>{title}</h2>
          <div className="items">

          {items.map(item=><CollectionItem key={item.id} item={item}/>)}</div>
      </div>
     );
 }
const mapStateToProps=(state,ownProps)=>({
    collections:selectCollection(ownProps.match.params.collectionId,)(state)
})
 export default connect(mapStateToProps)( Collection);
