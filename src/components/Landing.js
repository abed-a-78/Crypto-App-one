import React, { useState, useEffect } from 'react';

// API
import { getCoin } from '../services/api';

// Components
import Loader from './Loader';
import Coin from './Coin';

// Styles
import styles from "./Landing.module.css";


const Landing = () => {
    //garar dadan coin ha
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    // api ro dariaft mikonim
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            // console.log(data)
            setCoins(data)
        }

        fetchAPI()
    }, [])

    //value tarif kardim

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    //fillter kardan coin ha zamani ke nemad an ra search mikonim
    //includs chek mikne bebine on chizi ke neveshtim hast
    //toLowerCase agar karbar be sorat horof kochak nevesht tabdil be bozorg kone

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            {/* braye serch kardan coin ha */}
            <input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler} />
            {
                // age api omad component coin ma ejra beshe
                coins.length ?
                    <div className={styles.coinContainer}>
                        <div className={styles.container}>
                            <span>name</span>
                            <span>image</span>
                            <span>symbol</span>
                            <span>current_price</span>
                            <span>market_cap</span>
                        </div>
                        {/* halghe map mizanim va be sorat kamel tamam coin haiii ke az api daryaft kardim o be sorat props miferstim */}
                        {
                            searchedCoins.map(coin => <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.price_change_percentage_24h}
                            />)
                        }
                    </div> :
                    // dar gheire in sorat loader ro neshan bede
                    <Loader />
            }
        </>
    );
};

export default Landing;