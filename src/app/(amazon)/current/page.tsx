'use client';
import { useState } from "react";
import Badge from "@/app/(amazon)/_components/Badge";
import Menu from "@/app/(amazon)/_components/Menu";
import OpenMenu from "@/app/(amazon)/_components/OpenMenu";
import Tabs from "@/app/(amazon)/_components/Tabs";

function Page() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openBadge, setOpenBadge] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleBadge = () => {
        setOpenBadge(!openBadge);
    }

    return (
        <main className="bg-foreground w-full flex flex-col">
            <Badge onBadge={ handleBadge } open={openBadge} />
            <OpenMenu onBadge={ handleBadge } onClick={ handleMenu } open={openMenu} />
            <Menu onClick={ handleMenu } open={openMenu} text='ITINERARY' />
            <Tabs />
        </main>
    );
}

export default Page;