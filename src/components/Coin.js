import React from 'react';

// Styles
import styles from "./Coin.module.css";

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name} />
            <span className={styles.name} >{name}</span>
            {/* toUppercase baraye in ast ke be sorat hrof bozorg benevisad */}
            <span className={styles.symbol} >{symbol.toUpperCase()}</span>
            {/* toLocaleString gozashtan kama bein adadha */}
            <span className={styles.currentPrice} >$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange} >{priceChange.toFixed(2)}</span>
            <span className={styles.marketCap} >$ {marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;