"use client";

import Link from "next/link";
import {links} from "@/constants";
import {usePathname} from "next/navigation";

export default function NavLinks() {
    const currentPath = usePathname();
    return (
        <div className="flex justify-around items-center w-full absolute bottom-0 p-3 bg-red-700">
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link href={link.href} key={link.name} className={"flex justify-center flex-col items-center"}>
                        <LinkIcon size={20} className={`${currentPath === link.href ? "text-blue-700 shadow-2xl" : ""}`} icon={LinkIcon} />
                        <p className={currentPath === link.href ? "text-blue-700 shadow-2xl" : ""}>{link.name}</p>
                    </Link>
                )
            })}
        </div>
    );
}
