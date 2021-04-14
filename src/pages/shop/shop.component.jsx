import React, { Component } from 'react';

import {Route}  from 'react-router-dom'
import '../../redux/shop/shop.data'

import CollectionsOverview from '../../components/collections-overview/collection-overview.component'

import CollectionPage from '../collections/collection.component'


const ShopPage = ({match}) => (
  
  <div>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />

    <Route path={`${match.path}/:collectionId`} component={CollectionPage}
    />
    

  </div>
);


export default ShopPage;