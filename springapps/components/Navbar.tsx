"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const Navbar = () => {
    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <NavigationMenu>
                <NavigationMenuList className="px-4 py-2 bg-background/55 backdrop-blur-sm rounded-full shadow-lg border">
                    <NavigationMenuItem>
                        <Link href="/dashboard" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                Dashboard
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/dashboard/projects" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                Projects
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/dashboard/tasks" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                Tasks
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/dashboard/milestones" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                Settings
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export default Navbar;