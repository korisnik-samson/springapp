import React from 'react'
import Image from "next/image";

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <Image src='/logos/logo-primary.png' alt='logo' width={30} height={30} />
            <h2 className='font-semibold text-xl'>
                Intelli
            </h2>
        </div>
    );
}

export default Logo;