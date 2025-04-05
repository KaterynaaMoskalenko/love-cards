export const initiatePurchase = () => {
  const stripe = window.Stripe(
    "pk_live_51QifYhBFCACJo8xsKRu9qlqHbywfTy6XRfsmoGGVyDqRvlku37Ywf49mIYqfB5vBxKfJdXrRodnkcQkC26f0tCU800XvTC7Bnj"
  );
  stripe.redirectToCheckout({
    lineItems: [{ price: "price_1RATsSBFCACJo8xsVXkRbQKl", quantity: 1 }],
    mode: "payment",
    /*
     * Do not rely on the redirect to the successUrl for fulfilling
     * purchases, customers may not always reach the success_url after
     * a successful payment.
     * Instead use one of the strategies described in
     * https://docs.stripe.com/payments/checkout/fulfill-orders
     */
    successUrl:
      "https://app.twoofuscards.com/purchase-completed-successfully",
    cancelUrl:
      "https://app.twoofuscards.com/purchase-cancelled",
  });
};

export const storePurchaseSuccess = () => {
  localStorage.setItem("purchaseSuccess", "true");
};

export const clearPurchaseStatus = () => {
  localStorage.removeItem("purchaseSuccess");
}

export const getPurchaseStatus = () => {
  return !!localStorage.getItem("purchaseSuccess");
};
