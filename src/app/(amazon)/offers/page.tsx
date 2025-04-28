'use client';
import { useState } from "react";
import Badge from "../_components/Badge";
import OpenMenu from "../_components/OpenMenu";
import TopMenu from "../_components/TopMenu";
import Offers from "../_components/Offers";


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
        <main className="flex flex-col bg-foreground">
            <Badge onBadge={ handleBadge } open={openBadge} />
            <OpenMenu onBadge={ handleBadge } onClick={ handleMenu } open={openMenu} />
            <TopMenu onClick={ handleMenu } text='Offers'  />
            <Offers />
        </main>
    );
}

export default Page;