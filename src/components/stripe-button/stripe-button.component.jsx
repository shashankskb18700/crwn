import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishablekey =
    "pk_test_51Ig02QSA6xWLj0A8Fabawft7G0aNvP6vw87h6ki6v9g0buZJVZscs5n3ZzowcxvYM0o9PCNAWGjQUzUJ1xnpc6Sq00W53XkK6M";
  
  const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`your total is $${price}`}
      amount={priceForStrip}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  )
}

export default StripeCheckoutButton;