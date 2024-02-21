import React from 'react';
import  Image from 'next/image';
import logo from "./logo.svg"

const Navbar: React.FC = () => {
    return (
        <div className="bg-white flex items-center justify-between">
            <div className="flex items-center">
                <Image src={logo} alt="logo" className="h-20" />
            </div>
            <div className="flex items-center">
                {/* Navbar links or other content */}
            </div>
        </div>
    );
};

export default Navbar;
