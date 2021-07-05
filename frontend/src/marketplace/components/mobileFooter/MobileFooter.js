import React from 'react';
import { AiOutlineSearch,AiOutlineHome,AiOutlineUser } from "react-icons/ai";

const MobileFooter = () => {
    return (
        <div className="mobile-footer z-50 text-2xl h-12 items-center fixed bottom-0 left-0 right-0 flex border-t border-gray-200 bg-white">
            <div className="icon-box w-2/6 mx-2.5">
                <AiOutlineSearch></AiOutlineSearch>
            </div>
            <div className="icon-box w-2/6 mx-2.5">
                <AiOutlineHome></AiOutlineHome>
            </div>
            <div className="icon-box w-2/6 mx-2.5">
                <AiOutlineUser></AiOutlineUser>
            </div>
        </div>
    );
};

export default MobileFooter;