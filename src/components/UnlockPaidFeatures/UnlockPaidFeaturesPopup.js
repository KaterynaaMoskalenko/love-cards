import React from "react";
import { XMarkIcon, FireIcon } from "@heroicons/react/24/outline";
import "./UnlockPaidFeaturesPopup.css";
import { initiatePurchase } from "../../Menu/stripe/StripeService";

const UnlockPaidFeaturesPopup = ({ onClose, isShowPopup }) => {
    return isShowPopup && (
        <div className="unlock-popup">
            <div className="unlock-overlay">
                <div className="unlock-modal" onClick={(e) => e.stopPropagation()}>
                    <XMarkIcon className="unlock-close-icon" onClick={onClose} />

                    {/* Header */}
                    <div className="unlock-header">
                        <FireIcon className="unlock-flame" />
                        <h2 className="unlock-title">DEEP QUESTIONS & COUPLE CONVERSATIONS</h2>
                        <p className="unlock-subtitle">Upgrade for deeper conversations and more features!</p>
                    </div>

                    {/* Feature List */}
                    <ul className="unlock-features">
                        <li>🃏 150 Questions (Free version: 20)</li>
                        <li>⭐ Like questions & view favorites</li>
                        <li>📜 View history of played questions</li>
                        <li>🎯 Select & filter question categories</li>
                        <li>🔓 One-time payment – No subscriptions!</li>
                    </ul>

                    {/* Pricing Section */}
                    <div className="unlock-pricing">
                        <p className="unlock-price">Unlock all features for <strong>$10</strong></p>
                    </div>

                    {/* Purchase Button */}
                    <button className="unlock-button" onClick={initiatePurchase}>START NOW</button>

                    {/* Restore Purchases & Legal Links */}
                    <div className="unlock-restore">Restore previous purchases</div>
                    <div className="unlock-legal">
                        <span>Terms of use</span> | <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnlockPaidFeaturesPopup;
