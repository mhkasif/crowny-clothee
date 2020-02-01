import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_R0JMEojAiplZp0NYj3J2zsud00gqlXGUZ7";
const onToken=token=>{
    console.log(token)
    alert('Payment successful')
}
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothee "
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeButton


