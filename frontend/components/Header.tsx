import React from 'react'
import Logo from "@/components/Logo";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
    return (
        <div className='flex justify-between items-center p-3 shadow'>
            <Logo />
            <UserButton />
        </div>
    );
}

export default Header;