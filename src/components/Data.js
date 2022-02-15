import {useEffect, useState} from 'react'
import axios from 'axios'
import Coin from './Coin'

                              

const Data = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('') // fileredCoins function doesn't work here if useState has value ([]), has to be ('')

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data)
        }).catch(error => console.log(error))
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => 
       coin.name.toLowerCase().includes(search.toLowerCase())
        )

    return (
        <div className="top-ten">
            <div className="coin-search">
            <h1> Today's Cryptocurrency Prices </h1>
            <form>
                <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
            </form>


            </div>
            {filteredCoins.map(coin => { // c
                return(
                    <Coin 
                    key={coin.id} 
                    name={coin.name} 
                    image={coin.image} 
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    volume={coin.total_volume}
                    />
                )
            })}
        </div>
    )

}
  
export default Data;