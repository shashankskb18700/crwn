import React, { forwardRef } from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { toggleCartHidden } from  '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js'
import { ReactComponent as ShoppingIcon } from '../../assest/shopping-bag.svg'

import './cart-icon.styte.scss'

const CartIcon = ({ toggleCartHidden ,itemCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
}); 


const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount

});
  


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);