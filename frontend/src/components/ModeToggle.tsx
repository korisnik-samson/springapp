'use client'

import React, { useState } from 'react'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle(): React.JSX.Element {
    const { setTheme } = useTheme();
    const [themeState, setThemeState] = useState('')

    const handleClick = () => {
        setThemeState(themeState === 'dark' ? 'light' : 'dark')
        setTheme(themeState)
    }

    return (
        <Button onClick={() => handleClick()} size="icon" variant="outline">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all
             dark:-rotate-90 dark:scale-0" />

            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all
             dark:rotate-0 dark:scale-100" />
        </Button>
    );
}