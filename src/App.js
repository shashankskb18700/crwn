import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';


import HomePage from './pages/homepages/homepage-component'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component'



import Header from './components/header/header.component'

import { createStructuredSelector } from 'reselect'

import { setCurrentUser } from './redux/user/user.acitons';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { selectCurrentUser } from './redux/user/user.selectors'



class App extends React.Component{
 
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser,collecionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
         
              id: snapShot.id,
              ...snapShot.data()
              
            })
        })
      }
      setCurrentUser(userAuth);
      // addCollectionAndDocuments('collections',collecionsArray.map(({title,items})=>({title,items})))
   })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route  exact path="/checkout" component={CheckoutPage} />

          <Route exact path="/signin" render={() =>
            this.props.currentUser ?
              (<Redirect to='/' />
              ) :(
                <SignInAndSignUpPage /> 
              )
          } 
          />
        </Switch>
      </div>
    );
  }
 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);
