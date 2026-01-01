import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io"; 
import { HiOutlineMenuAlt3 } from "react-icons/hi"; 
import { RxCross2 } from "react-icons/rx"; 

const Navbar = () => {
    let menu = ['Home', 'Pages', 'Products', 'Blog', 'Shop', 'Contact'];
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='py-4 bg-white'>
            <div className="lg:w-11/12 w-10/12 mx-auto relative">
                <div className="flex justify-between items-center">
                    
                    <div className="flex items-center gap-x-20">
                        <div>
                            <h2 className='font-josefin text-[34px] text-[#0D0E43] font-bold'>Hekto</h2>
                        </div>
                        <div className="hidden lg:flex items-center gap-x-8">
                            {menu.map((item, index) => (
                                <div key={index} className='group flex items-center gap-1 cursor-pointer font-josefin text-[16px] hover:text-[#FB2E86] transition-all duration-300'>
                                   <li className={`list-none`}>
                                        {item}
                                   </li>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center border border-[#E7E6EF] rounded-md overflow-hidden">
                        <input 
                            type="text" 
                            className="w-70 px-3 py-2 outline-none text-[14px]" 
                            placeholder="Search For products"
                        />
                        <button className="bg-[#FB2E86] px-5 py-3 flex justify-center items-center hover:bg-[#F94C9B] transition-all">
                             <IoIosSearch className="text-white text-xl"/>
                        </button>
                    </div>
                    <div className="lg:hidden flex items-center gap-4">
                        <button onClick={() => setShowMenu(!showMenu)} className="text-3xl text-[#0D0E43]">
                           {showMenu ? <RxCross2/> : <HiOutlineMenuAlt3 />}
                        </button>
                    </div>
                </div>

                {showMenu && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col px-6 py-6 gap-4 border-t border-gray-200 mt-2 rounded-b-lg">
                         {menu.map((item, index) => (
                             <div key={index} className='flex items-center gap-1 cursor-pointer hover:text-[#FB2E86] transition-colors'>
                                <li className={`list-none text-[16px] font-josefin`}>
                                     {item}
                                </li>
                               
                             </div>
                         ))}
                         <div className="sm:hidden flex items-center border border-[#E7E6EF] rounded-md overflow-hidden mt-2">
                            <input 
                                type="text" 
                                className="w-full px-3 py-2 outline-none text-[14px]" 
                                placeholder="Search..."
                            />
                            <button className="bg-[#FB2E86] px-4 py-2 flex justify-center items-center">
                                    <IoIosSearch className="text-white text-lg"/>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar