import React from 'react'
import { FaTh, FaListUl } from "react-icons/fa";

const FashionItem = () => {
    return (
        <section className='py-12 lg:py-20 bg-white'>
            <div className="lg:w-9/12 w-11/12 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
                    <div className="text-center lg:text-left">
                        <h2 className='text-[#151875] font-josefin text-[22px] font-bold mb-2'>
                            Ecommerce Accessories & Fashion item
                        </h2>
                        <p className='text-[#8A8FB9] font-lato text-[12px]'>
                            About 9,620 results (0.62 seconds)
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <label htmlFor="perPage" className='text-[#3F509E] font-lato text-[16px]'>Per Page:</label>
                            <input
                                id="perPage"
                                type="text"
                                className='w-13.75 h-6.25 border border-[#E7E6EF] outline-none px-2 text-[#8A8FB9] text-[12px] focus:border-[#FB2E86] transition-colors'
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label htmlFor="sortBy" className='text-[#3F509E] font-lato text-[16px]'>Sort By:</label>
                            <select
                                id="sortBy"
                                className='h-7 border border-[#E7E6EF] outline-none px-2 text-[#8A8FB9] text-[12px] bg-white cursor-pointer focus:border-[#FB2E86] transition-colors'
                            >
                                <option value="best-match">Best Match</option>
                                <option value="newest">Newest</option>
                                <option value="price-low">Price: Low to High</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className='text-[#3F509E] font-lato text-[16px]'>View:</span>
                            <div className="flex items-center gap-2">
                                <FaTh size={14} className="text-[#151875] cursor-pointer hover:text-[#FB2E86] transition-colors" />
                                <FaListUl size={14} className="text-[#151875] cursor-pointer hover:text-[#FB2E86] transition-colors" />
                            </div>
                        </div>
                        <div className="">
                            <input
                                type="text"
                                className='w-30 sm:w-40 h-7.5 border border-[#E7E6EF] outline-none px-2 focus:border-[#FB2E86] transition-colors'
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FashionItem