import React from 'react';
import './Coin.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div>
            <ul className='coin-container'>
                <li className='coin-row'>
                    <div className='coin'>
                        <img src={image} alt='crypto'/>
                        <h1>{name}</h1>
                        <p className='coin-symbol'>{symbol}</p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">IDR {price.toLocaleString()}</p>
                        <p className="coin-volume">IDR {volume.toLocaleString()}</p>
                        {priceChange < 0 ? (
                            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                        )}
                        <p className="coin-marketcap">
                            Mkt Cap: IDR {marketcap.toLocaleString()}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Coin
