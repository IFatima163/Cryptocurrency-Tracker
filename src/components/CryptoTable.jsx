import CryptoItem from "./CryptoItem";

const CryptoTable = ({loading, error, coins,  favorites, toggleFavorites}) => {    
    if (loading) return <div className="text-white text-base p-4">Loading...</div>
    if (error) return <div className="text-red text-base p-4">{error}</div>

    return <div className="mt-4">
        <div className="grid grid-cols-4 gap-4 text-[#78b6ef] bg-[#164a79] rounded-t-[16px] border-b border-[#78b6ef] p-2">
            <div>Coin</div>
            <div>Price</div>
            <div>24h</div>
            <div>Favorite</div>
        </div>
        <div>
            {coins.map((coin) => (
                <CryptoItem key={coin.id} coin={coin} favorites={favorites} toggleFavorites={toggleFavorites}/>
            ))}
        </div>
    </div>;
};

export default CryptoTable;
