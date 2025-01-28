export const initiatePurchase = () => {
  const stripe = window.Stripe(
    "pk_test_51QifYhBFCACJo8xsfx8LFmF2m8metGxAE6ZBrLPWqYInyFPhdZMfBUhLKDPC4l4Bu9lL7nAjQg8kwLwWCKvGwTkY00hDUUD3pE"
  );
  stripe.redirectToCheckout({
    lineItems: [{ price: "price_1QifrMBFCACJo8xsJ6nYhpYm", quantity: 1 }],
    mode: "payment",
    /*
     * Do not rely on the redirect to the successUrl for fulfilling
     * purchases, customers may not always reach the success_url after
     * a successful payment.
     * Instead use one of the strategies described in
     * https://docs.stripe.com/payments/checkout/fulfill-orders
     */
    successUrl:
      window.location.protocol +
      "//www.twoofuscards.com/purchase-completed-successfully",
    cancelUrl:
      window.location.protocol + "//www.twoofuscards.com/purchase-cancelled",
  });
};

export const storePurchaseSuccess = () => {
  localStorage.setItem("purchaseSuccess", "true");
};

export const getPurchaseStatus = () => {
  return !!localStorage.getItem("purchaseSuccess");
};
