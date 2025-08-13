import { useState, useEffect } from "react"

const useCryptoModal = ({coinId, isOpened}) => {
    const [loading, setLoading] = useState(false)
    const [series, setSeries] = useState([])

    useEffect(() => {
        const fetchChartsData = async() => {
            if (!isOpened) return

            try {
                setLoading(true)
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`)
                const data = await res.json()
                const transformed = data?.prices.map(([timestamp, price]) => ({
                    x: timestamp,
                    y: +price.toFixed(2)
                }))
                setSeries([{name: `${coinId} price`, data: transformed}])
            } catch (e) {
                console.error("Failed to fetch data.")
            } finally {
                setLoading(false)
            }
        }
        fetchChartsData()
    }, [coinId, isOpened])

    return {
        loading, series
    }
}

export default useCryptoModal
