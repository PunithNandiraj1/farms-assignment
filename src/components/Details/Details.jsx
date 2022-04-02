import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import Logo from '../../images/coin.png';

const Details = () => {
  return (
    <>
      <div className="ido-detail">
        <div className="back">
          <div className="back-container">
            <Link to="/">
            <span>
              <i className="icon el-icon-arrow-left"></i>
              Back
            </span>
            </Link>
           
          </div>
        </div>
        <div className="ido-container">
          <div className="ido-container-left">
            <div className="item1">
              <div className="item-top">
                <div className="idologo">
                  <img
                    src={Logo}
                    alt="logo"
                    className="ido-logo"
                  />
                  <span className="ido-name"> BiFarms </span>
                </div>
              </div>
              <div className="ido-desc line4hidden">
                BiFarms is a Decentralized, Multi-Chain Yield Optimizer that
                focuses high yield on crypto assets & All In One Tierless
                Launchpad. BiFarms is a DeFi platform that allows its users to
                earn compound interest on their crypto holdings. Through a set
                of investment strategies secured and enforced by smart
                contracts, BiFARMS network automatically maximizes the user
                rewards from various liquidity pools (LPs),‌ ‌automated market
                making (AMM) projects, and‌ other yield‌ farming
                ‌opportunities in the DeFi ecosystem.
              </div>
            </div>
            <div className="ido-links">
              <div className="ido-link-item">
                <img
                  src="https://cdn.erax.io/user/20210926/7c8df6a048393cb2cbaf3b35dc134291.png"
                  alt=""
                />
              </div>
              <div className="ido-link-item">
                <img
                  src="https://cdn.erax.io/user/20210926/dabe6ff390ffaa42ede19ec479b98e1f.png"
                  alt=""
                />
              </div>
              <div className="ido-link-item">
                <img
                  src="https://cdn.erax.io/user/20210926/a45efe3c3a229639d9b638eb2a2241d8.png"
                  alt=""
                />
              </div>
              <div className="ido-link-item">
                <img
                  src="https://cdn.erax.io/user/20210926/c1ebe8df6a490299990f781d82632e3d.png"
                  alt=""
                />
              </div>
              <div className="ido-link-item">
                <img
                  src="	https://cdn.erax.io/user/20210926/9571e925dd6896cad7bcef52d336030e.png"
                  alt=""
                />
              </div>
            </div>
            <div className="cap">
              <div className="soft-cap item-column">
                <div className="cap-title column-title"> Soft Cap</div>
                <div className="cap-value column-value"> 0 BFM </div>
              </div>
              <div className="hart-cap item-column">
                <div className="cap-title column-title"> Hard Cap</div>
                <div className="cap-value column-value"> 50000 BFM </div>
              </div>
            </div>
            <div className="supported-coin item-column">
              <div className="coin-title column-title"> Supported Coin </div>
              {/* <div className="unit"> BUSD </div> */}
              <div className="exchange-rate column-value">
                <span> 1 BFM = 5.00 BUSD / 1 BUSD = 0.20 BFM</span>
              </div>
            </div>
            <div className="item-column">
              <div className="column-title"> Lock-up rules </div>
              <div className="column-value">
                Allocation: 500-25000 BUSD
                <br />
                Vesting time and rules:
                <br />
                Seed Round - 10% unlocked at TGE, cliff 2 months. 
                <br />
                The rest 90% will be unlocked monthly in the next 15 months.
              </div>
            </div>
            <div className="item-column">
              <div className="column-title"> Project Introduction </div>
              <div className="column-value">
              BiFARMS is a Decentralized Finance (DeFi) Yield Optimizer project, that allows its users to make more crypto with crypto. 
DeFi applications are unique in the sense that they are permission less and trustless, meaning that anyone with a supported wallet 
can interact with them without the need for a trusted middlemen. BiFARMS caters its users by making it easy to get a yield on their crypto capital 
in a safe and decentralized manner. Through a set of smart contracts and several investment strategies, BiFARMS automatically maximizes the user rewards 
from various liquidity pools (LPs), automated market making (AMM) projects, and other yield farming opportunities in the DeFi ecosystem. 
This provides a huge advantage over attempting to do this manually yourself. BiFARMS up those yields!

                <br />
                <br />
                Token information [Deflationary]
                <br />
                Type: BEP20
                <br />
                Ticker: BFM
                <br />
                Total supply: 1000000
                <br />
                Initial circulating supply: 52000 BFM
                <br />
                Initial market cap: $520000 USD 
                <br />
                Precise Emission Type: Burn & Mint Equilibrium, Programmatic
                Burn
                <br />
                Capped Supply: Yes
                <br />
                <br />
              </div>
            </div>
            <div className="harvestDesc"></div>
          </div>
          <div className="ido-container-right">
            <div className="left">
              <img src={Logo} alt="" className="logo windmill" />
              <div>
                <p className="ido-name"> Bifarms </p>
                <div className="ido-tags">
                  <div className="status">
                    <span> Ended </span>
                  </div>
                  <div className="chain-info">
                    <img src="" alt="" />
                    <div className="chain-name"> BSC </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="right">
              <div className="top-div">
                <div className="amount-container">
                  <div className="amount color3">
                    <div className="amount-title">Time</div>
                    <div className="amount-value">
                      <div className="start-time time">
                      2022.04.02 08:00 UTC
                  
                      </div>
                      <div className="end-time time">
                      2022.04.02 12:00 UTC
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
