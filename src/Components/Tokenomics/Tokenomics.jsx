import React from "react";
import TokenomicsImg from "../../Images/token_circle_mob.webp";
import "./Tokenomics.css";

const Tokenomics = () => {
  return (
    <div className="tokenomics-container">
      <div className="tokenomics-background"></div>

      {/* Title Section */}
      <div className="tokenomics-title">
        <h1 className="tokenomics-heading">TOKENOMICS</h1>
        <p className="tokenomics-description">
          With a well-structured token distribution and growth model, BVT is
          positioned for long-term sustainability and value appreciation.
        </p>
      </div>

      {/* Center circle glow effect */}
      {/* <div className="center-circle">
        <div className="outer-ring"></div>
        <div className="middle-ring"></div>
        <div className="inner-ring"></div>
        <div className="core-circle"></div>
      </div> */}
      <div className="tokenomics-img">
        <img src={TokenomicsImg} />
      </div>

      <div className="token-wrapper">
        {/* Presale - Left Top */}
        <div className="token-section presale">
          <div className="token-label">Donation</div>
          <div className="token-value">1000000000 BVT</div>
          <div className="token-percentage">10% (After 2029 Quarter 4th)</div>
          <div className="line-connector left">
            <svg width="150" height="2">
              <line
                x1="0"
                y1="1"
                x2="150"
                y2="1"
                stroke="white"
                strokeDasharray="4 4"
              />
              <circle cx="150" cy="1" r="3" fill="#FF9800" />
            </svg>
          </div>
        </div>

        {/* Rewards - Left Middle */}
        <div className="token-section rewards">
          <div className="token-label">Locked Tokens</div>
          <div className="token-value">3000000000 BVT</div>
          <div className="token-percentage">30% (Till 2027 Quarter 4th)</div>
          <div className="line-connector left">
            <svg width="150" height="2">
              <line
                x1="0"
                y1="1"
                x2="150"
                y2="1"
                stroke="white"
                strokeDasharray="4 4"
              />
              <circle cx="150" cy="1" r="3" fill="#FF9800" />
            </svg>
          </div>
        </div>

        {/* Airdrop - Right Top */}
        <div className="token-section airdrop">
          <div className="token-label">Exchange</div>
          <div className="token-value">2000000000 BVT</div>
          <div className="token-percentage">20%</div>
          <div className="line-connector right">
            <svg width="150" height="2">
              <line
                x1="0"
                y1="1"
                x2="150"
                y2="1"
                stroke="white"
                strokeDasharray="4 4"
              />
              <circle cx="0" cy="1" r="3" fill="#FF9800" />
            </svg>
          </div>
        </div>

        {/* Presale bonus - Right Top-Middle */}
        <div className="token-section presale-bonus">
          <div className="token-label">Pre-Sale </div>
          <div className="token-value">4000000000 BVT</div>
          <div className="token-percentage">40%</div>
          <div className="line-connector right">
            <svg width="150" height="2">
              <line
                x1="0"
                y1="1"
                x2="150"
                y2="1"
                stroke="white"
                strokeDasharray="4 4"
              />
              <circle cx="0" cy="1" r="3" fill="#FF9800" />
            </svg>
          </div>
        </div>

        {/* Team - Right Middle */}
        <div className="token-section team">
          <div className="token-label">Referral</div>
          {/* <div className="token-value">500000000 BVT</div> */}
          <div className="token-percentage">5%</div>
          <div className="line-connector right">
            <svg width="150" height="2">
              <line
                x1="0"
                y1="1"
                x2="150"
                y2="1"
                stroke="white"
                strokeDasharray="4 4"
              />
              <circle cx="0" cy="1" r="3" fill="#FF9800" />
            </svg>
          </div>
        </div>
      </div>

      {/* Marketing - Right Middle-Bottom */}
      {/* <div className="token-section marketing">
        <div className="token-label">Marketing</div>
        <div className="token-value">403.304.392</div>
        <div className="token-percentage">05%</div>
        <div className="line-connector right">
          <svg width="150" height="2">
            <line
              x1="0"
              y1="1"
              x2="150"
              y2="1"
              stroke="white"
              strokeDasharray="4 4"
            />
            <circle cx="0" cy="1" r="3" fill="#FF9800" />
          </svg>
        </div>
      </div> */}

      {/* Liquidity Pool - Right Bottom */}
      {/* <div className="token-section liquidity">
        <div className="token-label">Liquidity Pool</div>
        <div className="token-value">1.613.217.568</div>
        <div className="token-percentage">20%</div>
        <div className="line-connector right">
          <svg width="150" height="2">
            <line
              x1="0"
              y1="1"
              x2="150"
              y2="1"
              stroke="white"
              strokeDasharray="4 4"
            />
            <circle cx="0" cy="1" r="3" fill="#FF9800" />
          </svg>
        </div>
      </div> */}

      {/* Total Supply */}
      <div className="total-supply">
        <div className="total-supply-text">Total Supply : 1000,0000000 BVT</div>
      </div>
    </div>
  );
};

export default Tokenomics;
