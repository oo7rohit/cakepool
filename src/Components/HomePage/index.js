import React from 'react'
import './style.css'

import { ReactComponent as Community1 } from '../assets/images/community1.svg';
import { ReactComponent as Reward } from '../assets/images/reward.svg';
import { ReactComponent as Sell } from '../assets/images/sell.svg';
import { ReactComponent as EthereumCoin } from '../assets/images/EthereumCoin.svg';
import { ReactComponent as BuySell } from '../assets/images/buy-sell.svg';
import { ReactComponent as Binance } from '../assets/images/binance.svg';
import { ReactComponent as Discord1 } from '../assets/images/discord1.svg'
import { ReactComponent as Instagram1 } from '../assets/images/insta1.svg';
import { ReactComponent as Reddit1 } from '../assets/images/reddit1.svg';
import { ReactComponent as Twitter1 } from '../assets/images/twitter1.svg';
import { ReactComponent as Twitter2 } from '../assets/images/twitter2.svg';
import { ReactComponent as Tiktok1 } from '../assets/images/tiktok1.svg';
import { ReactComponent as Telegram1 } from '../assets/images/telegram1.svg';
export default function HomePage() {
    return (
        <>
            <div className="position-relative">
                <div className='bg-page1'>
                    <div className="container">
                        <div className='display-grid page-1'>

                            <section className='home-section-1'>
                                <h2>CakePool</h2>
                                <h1>We are a community staking cake on Pancakeswap. </h1>
                                <div className='button-grp'>
                                    <button className='button'>Buy Now</button>
                                    <button className='btn-secondary'>Live Chart</button>
                                </div>
                            </section>
                            <section className='home-section-2'>
                                <img src={require('../assets/images/4500_6_06-ai-2 1.png')} alt="" />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <div className="bg-page2">
                    <div className="container section-4">
                        <div className="display-grid grid-2">
                            <section className="home-section-3">
                                <h1>Why Cakepool</h1>
                                <p>You get to be part of an awesome community, take part in the 1 million dollar challenge and be apart of an evolving CakePool ecosystem.</p>
                            </section>
                            <section className="home-section-4">
                                <Sell />
                                <Reward />
                                <Community1 />
                            </section>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="display-grid section-5">
                    <section className='home-section-5'>

                        <h1>1 million dollar challenge</h1>
                        <p>The goal is to get from $1,000 to $1,000,000 by doing 10 2x trades. There will be a community challenge and an individual challenge. The community will vote on which tokens to buy.</p>
                        <button className='read-more'>Read more...</button>
                    </section>
                    <section className='home-section-6'>
                        <img src={require('../assets/images/6100_5_01-ai 1.png')} alt="" />
                    </section>
                </div>
            </div>
            <div className='position-relative'>
                <div className="bg-tokenomics">
                    <div className="container">
                        <div className="display-grid align-center">
                            <div className="content-wrapper">
                                <h1>Tokenomics</h1>
                                <div className='grid-box'>
                                    <div className='box'>

                                        <Binance className='icon-center' />
                                        <div className='main-content'>
                                            <div>
                                                <h2>Buy:</h2>
                                                <p>Total tax 10% </p>
                                            </div>
                                            <div>
                                                <h2>Sell:</h2>
                                                <p>Total tax 21% </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box'>

                                        <BuySell className='icon-center' />
                                        <div className='main-content'>
                                            <div>
                                                <h2>Buy/Sell:</h2>
                                                <p>3% BUSD rewards</p>
                                            </div>
                                            <div>
                                                <h2>Liquidity:</h2>
                                                <p>3% liquidity pool</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='box'>
                                        <EthereumCoin className='icon-center' />
                                        <div className='main-content'>

                                            <div>
                                                <h2>Buy:</h2>
                                                <p>7% cake staking pool</p>
                                            </div>
                                            <div>
                                                <h2>Sell:</h2>
                                                <p>15% cake staking pool</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <div className="bg-footer">
                    <div className="container">
                        <div className='display-grid footer-1'>
                            <div>
                                <p className='footer-para'>CakePool is set up to have rewards given out even if there is zero trading being done</p>
                            </div>
                            <div className='social-icon'>
                                <h2>Follow Us</h2>
                                <ul className='social-icon-list'>
                                    <li><a href="#"></a><Instagram1 /></li>
                                    <li><a href="#"></a><Tiktok1 /></li>
                                    <li><a href="#"></a><Reddit1 /></li>
                                    <li><a href="#"></a><Twitter1 /></li>
                                    <li><a href="#"></a><Telegram1 /></li>
                                    <li><a href="#"></a><Discord1 /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <footer className="display-grid footer-2">
                            <div className="logo">
                                <img src={require('../assets/images/logo1.png')} alt="Manage" />
                                <p>Cakepool</p>
                            </div>
                            <ul className="social-icon-list">

                                <li><a href="#"></a><Twitter2 className='bottom-icon' /></li>
                                <li><a href="#"></a><Twitter2 className='bottom-icon' /></li>
                                <li><a href="#"></a><Twitter2 className='bottom-icon' /></li>
                                <li><a href="#"></a><Twitter2 className='bottom-icon' /></li>

                            </ul>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}
