import React from "react";
import { XMarkIcon, FireIcon } from "@heroicons/react/24/outline";
import "./UnlockPaidFeaturesPopup.css";
import {initiatePurchase} from "../../Menu/stripe/StripeService";

const UnlockPaidFeaturesPopup = ({onClose, isShowPopup}) => {
    return isShowPopup && (
        <div className="popup-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <XMarkIcon className="close-icon" onClick={onClose} />

                <div className="modal-header">
                    <FireIcon height={50}/>
                    <h2 className="modal-title">Some text</h2>
                </div>

                <ul className="feature-list">
                    <li>📅 New Content Every Week</li>
                    <li>❤️ Daily Surprise Mode</li>
                    <li>🔑 Unlimited Access to All Card Packs</li>
                </ul>

                <div className="pricing-section">
                    <div className="free-trial">
                        <span className="free-label">3 free days</span>
                        <p className="free-price">0zł</p>
                        <small>during 3 days</small>
                    </div>

                    <div className="pricing-option">
                        <p>Monthly</p>
                        <strong>24.99zł</strong>
                        <small>mo / per user</small>
                    </div>

                    <div className="pricing-option">
                        <p>Yearly</p>
                        <strong>150.00zł</strong>
                        <small>an / per user</small>
                    </div>
                </div>

                <button className="start-button" onClick={initiatePurchase}>Start Now!</button>
                <div className="legal-links">
                    <span>Terms of use</span> | <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
};

export default UnlockPaidFeaturesPopup;
