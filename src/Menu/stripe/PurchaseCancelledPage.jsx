import { useNavigate } from "react-router";
import { initiatePurchase } from "./StripeService";

export const PurchaseCancelledPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      Payment is cancelled
      <button onClick={() => navigate("/")}>Play free version</button>
      <button onClick={initiatePurchase}>Try again</button>
    </div>
  );
};
