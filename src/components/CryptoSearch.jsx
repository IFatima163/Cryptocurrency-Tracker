import {ArrowCircleDown, ArrowCircleUp} from "@phosphor-icons/react"

const CryptoSearch = ({searchValue, setSearchValue, setPage, sortAsc, setSortAsc}) => {
  return (
    <div className="mt-4 flex items-center gap-x-4">
      <input
        className="w-full border-[2px] border-[#78b6ef] bg-[#164a79] rounded-[16px] h-10 px-3 text-white text-base"
        value={searchValue}
        placeholder="Search"
        onChange={(e) => {
            setSearchValue(e.target.value)
            setPage(1)
          }
        }
      />
      <button 
        className="border-[2px] border-[#78b6ef] bg-[#164a79] rounded-[16px] h-10 px-3 
          text-white text-base flex items-center gap-x-4 cursor-pointer"
        onClick={() => {
          setSortAsc(!sortAsc)
          setPage(1)
        }}
      >
        Sort: {
          !sortAsc ? 
          <ArrowCircleDown size={32} weight="fill" color="#78b6ef"/> : 
          <ArrowCircleUp size={32} weight="fill" color="#78b6ef"/>
        }
      </button>
    </div>
  );
};

export default CryptoSearch;
