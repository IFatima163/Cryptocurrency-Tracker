const Pagination = ({page, totalPages, setPage}) => {
    return (
        <div className='flex justify-center items-center gap-2 mt-4 text-base text-white'>
            <button onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1} className='px-4 py-1 border border-[#78b6ef] rounded-[12px] cursor-pointer hover:bg-[#78b6ef]'
            >
                Prev
            </button>
            <span>{page} / {totalPages}</span>   
            <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages} className='px-4 py-1 border border-[#78b6ef] rounded-[12px] cursor-pointer hover:bg-[#78b6ef]'
            >
                Next
            </button>
        </div>
    )
}

export default Pagination
