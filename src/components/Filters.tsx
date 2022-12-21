import React, { ReactElement } from 'react'
import arrowRight from '~/assets/icons/arrow-right.svg'
import { Filter } from "~/types/appTypes";

interface Props {
  filter: Filter
  setFilter: (filter:Filter)=>void
}

const Filters: React.FC<Props> = ({filter, setFilter}) => {
  return (
    <div className='container 2xl:px-10 my-8 mx-auto border-b-2 border-stone-200 pb-4'>
      <div className="flex flex-wrap items-center">
        <span>16 of 32 products</span>
        <div className="flex grow flex-wrap items-center ml-2 pl-2 border-l-2 border-stone-200">
          <span className='mr-6 text-stone-500'>Sort by:</span>
          <button onClick={()=>setFilter(Filter.MostRecent)} className={`${ filter == Filter.MostRecent ? 'bg-cyan text-white' : 'bg-stone-300 text-stone-500 hover:text-stone-700'} px-3 py-2 rounded-full mr-3`}>Most recent</button>
          <button onClick={()=>setFilter(Filter.LowestPrice)} className={`${ filter == Filter.LowestPrice ? 'bg-cyan text-white' : 'bg-stone-300 text-stone-500 hover:text-stone-700'} px-3 py-2 rounded-full mr-3`}>Lowest price</button>
          <button onClick={()=>setFilter(Filter.HighestPrice)} className={`${ filter == Filter.HighestPrice ? 'bg-cyan text-white' : 'bg-stone-300 text-stone-500 hover:text-stone-700'} px-3 py-2 rounded-full mr-3`}>Highest price</button>
        </div>
        <div>
          <img src={arrowRight} alt="arrow right" className='hover:scale-105 hover:cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Filters