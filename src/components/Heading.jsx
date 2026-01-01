import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";

const Heading = () => {
    return (
        <>
            <div className="py-2 bg-[#7E33E0]">
                <div className="lg:w-9/12 w-[95%] sm:w-10/12 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                        <div className="flex items-center gap-2 sm:gap-6 text-white text-[14px] sm:text-[16px] font-josefin">
                            <div className="flex items-center gap-2">
                                <MdOutlineMail />
                                <p>mhhasanul@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineWifiCalling3 />
                                <p>(12345)67890</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-5 text-white text-[14px] sm:text-[16px] font-josefin">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <p>Login</p>
                                <FaRegUser />
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <p>Wishlist</p>
                                <MdOutlineFavoriteBorder />
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <RiShoppingCartLine />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading