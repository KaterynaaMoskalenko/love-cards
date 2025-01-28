import { useNavigate } from "react-router";
import { storePurchaseSuccess } from "./StripeService";
import { useEffect } from "react";

export const PurchaseSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    storePurchaseSuccess();
  }, []);

  return (
    <div>
      Payment is successful
      <button onClick={() => navigate("/")}>Play now</button>
    </div>
  );
};
