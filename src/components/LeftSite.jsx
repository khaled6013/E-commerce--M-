import React, { useContext } from 'react'
import { ApiData } from './ContextApi';

const LeftSite = () => {
    let data = useContext(ApiData);
    const uniqueBrands = [...new Set(data.map((item) => item.brand))];
    const uniqueCategories = [...new Set(data.map((item) => item.category))];
    const priceRanges = [
        { id: 1, label: "$0.00 - $150.00" },
        { id: 2, label: "$150.00 - $350.00" },
        { id: 3, label: "$350.00 - $500.00" },
        { id: 4, label: "$500.00 +" }
    ];

    return (
        <>
            <div className="w-full">
                {/* --- Product Brand Section --- */}
                <div className="">
                    <h2 className='text-[22px] font-josefin font-bold text-[#101750] pb-3'>Product Brand</h2>
                    <div className="mt-2 flex items-center gap-2">
                         <input type="checkbox" id="all-brands" className='cursor-pointer' />
                         <label htmlFor="all-brands" className='text-[#3F509E] font-lato text-[16px] cursor-pointer'>All Brand</label>
                    </div>
                    {uniqueBrands.map((brand, index) => {
                        if(!brand) return null; 
                        return (
                            <div key={index} className="mt-2 flex items-center gap-2">
                                <input type="checkbox" id={brand} className='cursor-pointer accent-[#FF3EB2]' />
                                <label htmlFor={brand} className='text-[#3F509E] font-lato text-[16px] cursor-pointer'>{brand}</label>
                            </div>
                        )
                    })}
                </div>

                {/* --- Categories Section --- */}
                <div className="lg:mt-10 mt-6">
                    <h2 className='text-[22px] font-josefin font-bold text-[#101750] pb-3'>Categories</h2>
                    <div className="mt-2 flex items-center gap-2">
                         <input type="checkbox" id="all-categories" className='cursor-pointer accent-[#FF3EB2]' />
                         <label htmlFor="all-categories" className='text-[#3F509E] font-lato text-[16px] cursor-pointer'>All Categories</label>
                    </div>
                    {uniqueCategories.map((category, index) => {
                        if(!category) return null; 
                        return (
                            <div key={index} className="mt-2 flex items-center gap-2">
                                <input type="checkbox" id={category} className='cursor-pointer accent-[#FF3EB2]' />
                                <label htmlFor={category} className='text-[#3F509E] font-lato text-[16px] cursor-pointer capitalize'>{category}</label>
                            </div>
                        )
                    })}
                </div>

                {/* --- Price Filter Section (Updated) --- */}
                <div className="lg:mt-10 mt-6">
                    <h2 className='text-[22px] font-josefin font-bold text-[#101750] pb-3'>Price Filter</h2>
                    {priceRanges.map((range, index) => {
                        return (
                            <div key={range.id} className="mt-2 flex items-center gap-2">
                                <input 
                                    type="checkbox" 
                                    id={`price-${range.id}`} 
                                    className='cursor-pointer accent-[#FF3EB2]'
                                />
                                <label htmlFor={`price-${range.id}`} className='text-[#3F509E] font-lato text-[16px] cursor-pointer'>
                                    {range.label}
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default LeftSite