import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";




const Heading = () => {
    return (
        <>
            <div className="py-2 bg-[#7E33E0]">
                <div className="lg:w-11/12 w-10/12 mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-6 text-white text-sm">
                            <div className="flex items-center gap-2">
                                <MdOutlineMail />
                                <p>mhhasanul@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineWifiCalling3 />
                                <p>(12345)67890</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 text-white text-sm">
                            <div className="flex items-center gap-2">
                                <p>Login</p>
                                <FaRegUser />
                            </div>
                            <div className="flex items-center gap-2">
                                <p>Wishlist</p>
                                <MdOutlineFavoriteBorder />
                            </div>
                            <div className="flex items-center gap-2">
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