'use client';
import { useState } from "react";
import Badge from "../_components/Badge";
import OpenMenu from "../_components/OpenMenu";
import TopMenu from "../_components/TopMenu";
import Updates from "../_components/Updates";
import FooterMenu from "../_components/FooterMenu";

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
        <main className="w-full h-full bg-foreground">
            <Badge onBadge={ handleBadge } open={openBadge} />
            <OpenMenu onBadge={ handleBadge } onClick={ handleMenu } open={openMenu} />
            <TopMenu onClick={ handleMenu } text='UPDATES'/>
            <Updates />
            <FooterMenu />
        </main>
    );
}

export default Page;