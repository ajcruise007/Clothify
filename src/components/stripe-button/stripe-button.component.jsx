import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

 const StripeCheckoutButton = ({ price }) => {
     const priceForStripe = price * 100;
     const publishableKey = 'pk_test_51INCMrFFmPKzDQu4uxDZGwfHNomPQenBoh5irKqTDqirbVNEYHicEAILZIQQUPTJmF8VDe4IOQZ9wMTMiPMRvOyG00Px0TzIDW';
     const onToken = token => {
         console.log(token);
         alert('Payment Successful');
     }

     return (
         <StripeCheckout 
            label="Make Payment"
            name="Clothify"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
            image='https://svgshare.com/i/CUz.svg'
         />
     )
 }

 export default StripeCheckoutButton;