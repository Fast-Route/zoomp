'use client';
import { useState } from "react";
import Badge from "../_components/Badge";
import OpenMenu from "../_components/OpenMenu";
import Menu from "../_components/Menu";
import Schedule from "../_components/Schedule";

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
        <main className="flex flex-col">
            <Badge onBadge={ handleBadge } open={openBadge} />
            <OpenMenu onBadge={ handleBadge } onClick={ handleMenu } open={openMenu} />
            <Menu onClick={ handleMenu } text=''  />
            <Schedule />
        </main>
    );
}

export default Page;