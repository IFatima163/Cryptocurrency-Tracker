import { useState } from "react"
import CryptoModal from "./CryptoModal/CryptoModal"
import { HeartStraight } from "@phosphor-icons/react"

const CryptoItem = ({coin, toggleFavorites, favorites}) => {
    const isGrowing = coin.price_change_percentage_24h > 0
    const [isOpened, setIsOpened] = useState(false)
    const isFavorite = favorites.includes(coin.id)

    return (
    <>
        <CryptoModal isOpened={isOpened} setIsOpened={setIsOpened} coinId={coin.id}/>
        <div 
            className='grid grid-cols-4 gap-4 text-white border-t-[2px] border-[#78b6ef] 
            p-2 hover:bg-[#78b6ef] cursor-pointer'
        >
            <div className='flex items-center gap-x-2' onClick={() => setIsOpened(true)}>
                <img alt={coin.name} src={coin.image} className='size-4'/>
                {coin.name}
            </div>
            <div>$ {coin.current_price}</div>
            <div className={`${isGrowing ? 'text-[#10d132]' : 'text-[#ac0000]'}`}>
                {isGrowing ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div onClick={() => toggleFavorites(coin.id)} className="cursor-pointer">
                <HeartStraight color="#c70000" size={32} weight={isFavorite ? "fill" : "bold"}/>
            </div>
        </div>
    </>
    )
}

export default CryptoItem
