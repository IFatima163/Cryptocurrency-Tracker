import { X } from "@phosphor-icons/react"
import {createPortal} from "react-dom"
import Chart from "react-apexcharts"
import useCryptoModal from "./useCryptoModal"

const CryptoModal = ({isOpened, setIsOpened, coinId}) => {
    const {loading, series} = useCryptoModal({coinId, isOpened})
    
    if (!isOpened) return null

    return createPortal(
        <div 
            className="fixed z-[100] top-0 right-0 bg-black/[0.5] flex 
                justify-center items-center w-screen h-screen"
            onClick={() => setIsOpened(false)}
        >
            <div 
                className="relative bg-white p-4 max-w-[500px] min-h-[500px] w-[90%] rounded-[12px] shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <X size={24} weight="bold" 
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={() => setIsOpened(false)}
                />
                <div>
                    <h2 className="font-bold text-xl mb-2">
                        {coinId} - 7 Days Price Chart
                    </h2>
                    {loading ? <div>Loading...</div> : null}
                    {series.length > 0 && (
                        <Chart 
                            options={{
                                chart: {
                                    id: 'price-chart',
                                    toolbar: {show: false},
                                    zoom: {enabled: false}
                                },
                                xaxis: {
                                    type: 'datetime',
                                    labels: {format: 'dd MMM'}
                                },
                                stroke: {
                                    curve: 'smooth',
                                    width: 2
                                },
                                colors: ['black'],
                                tooltip: {
                                    x: {format: 'dd MMM'}
                                }
                            }}
                            series={series}
                            type='line'
                            height='300'
                        />
                    )}
                </div>
            </div>
        </div>, 
        document.body
    )
}

export default CryptoModal
