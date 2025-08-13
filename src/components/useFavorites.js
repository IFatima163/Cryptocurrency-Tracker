import { useEffect, useState } from "react"

const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => {
        const storedItems = localStorage.getItem('favorites')
        return storedItems ? JSON.parse(storedItems) : []
    })
    
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const toggleFavorites = (id) => {
        setFavorites((prev) => 
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        )
    }
    return {
        favorites,
        toggleFavorites
    }
}

export default useFavorites
