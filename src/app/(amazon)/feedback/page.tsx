'use client';
import { useState } from "react";
import Badge from "../_components/Badge";
import OpenMenu from "../_components/OpenMenu";
import TopMenu from "../_components/TopMenu";
import Feedback from "../_components/Feedback";

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
            <TopMenu onClick={ handleMenu } text='LEAVE FEEDBACK'  />
            <Feedback />
        </main>
    );
}

export default Page;