const CryptoItem = ({coin}) => {
    const isGrowing = coin.price_change_percentage_24h > 0

    return (
        <div className='grid grid-cols-3 gap-4 text-white border-t-[2px] border-[#78b6ef p-2'>
            <div className='flex items-center gap-x-2'>
                <img alt={coin.name} src={coin.image} className='size-4'/>
                {coin.name}
            </div>
            <div>$ {coin.ath}</div>
            <div className={`${isGrowing ? 'text-[#10d132]' : 'text-[#ac0000]'}`}>
                {isGrowing ? '+' : '-'}{coin.price_change_percentage_24h.toFixed(2)}%
            </div>
        </div>
    )
}

export default CryptoItem
