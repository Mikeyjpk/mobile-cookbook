"use client"

import Link from "next/link";
import { Menu } from "lucide-react";
import { Montserrat } from "next/font/google";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const font = Montserrat({
    weight: "800",
    subsets: ["latin"]
})

export const Navbar = () => {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
            <div className="flex items-center">
                <Menu className="block md:hidden"/>
                <Link href="/">
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bodl text-primary",
                        font.className
                    )}>
                        CookCommunity
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <ModeToggle />
                <UserButton />
            </div>
        </div>
    )
}