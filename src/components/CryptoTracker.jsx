import { useEffect, useMemo, useState } from "react";
import CryptoSearch from "./CryptoSearch";
import CryptoTable from "./CryptoTable";
import Pagination from "./Pagination";
import useFavorites from "./useFavorites";
import CryptoItem from "./CryptoItem";
const PER_PAGE = 10

const CryptoTracker = () => {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [coins, setCoins] = useState([])
  const [searchValue, setSearchValue] = useState("");
  const [sortAsc, setSortAsc] = useState(false)
  const {favorites, toggleFavorites} = useFavorites()

  const filtered = coins.filter((i) => i.name.toLowerCase().includes(searchValue.toLowerCase()))
  const sorted = [...filtered].sort((a, b) => 
    sortAsc ? a.current_price - b.current_price : b.current_price - a.current_price  
  )
  const paginated = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const totalPages = Math.ceil(filtered?.length / PER_PAGE)

  useEffect(() => {
      const fetchCoins = async() => {
          try {
              setLoading(true)
              const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
              const data = await res.json()
              if(data && data?.length){
                  setCoins(data)
              }
          } catch (e) {
              setError("Failed to fetch data.")
          } finally {
              setLoading(false)
          }
      }
      fetchCoins()
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#001930] flex pt-20 justify-center">
      <div className="max-w-[700px] w-full">
        <h1 className="text-white text-4xl font-bold">
          Cryptocurrency Tracker
        </h1>
        <div>
          <h2 className="text-white text-xl font-bold mt-2">
            Your Favorites
          </h2>
          {favorites ? <div>
            {coins.filter((i) => favorites.includes(i.id)).map((coin) => (
              <CryptoItem key={coin.id} coin={coin} favorites={favorites} toggleFavorites={toggleFavorites}/>
            ))}
          </div> : null}          
        </div>
        <CryptoSearch searchValue={searchValue} setSearchValue={setSearchValue} setPage={setPage} sortAsc={sortAsc} setSortAsc={setSortAsc}/>
        <CryptoTable loading={loading} error={error} coins={paginated} favorites={favorites} toggleFavorites={toggleFavorites}/>
        <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
      </div>
    </div>
  );
};

export default CryptoTracker;
