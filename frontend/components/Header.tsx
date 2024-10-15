import React from 'react'
import Logo from "@/components/Logo";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
    return (
        <div className='flex justify-between items-center p-3 shadow'>
            <Link href='/'>
                <Logo />
            </Link>

            <OrganizationSwitcher />
            <UserButton />
        </div>
    );
}

export default Header;