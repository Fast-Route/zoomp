'use client';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

function FooterMenu() {
    const [active, setActive] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/updates') {
            setActive('updates');
        }

        if (pathname === '/schedule') {
            setActive('schedule');
        }
    }, [pathname]);

    return (
        <footer className="fixed bottom-0 bg-white border-t-2 border-gray-300 w-full h-[12vh] p-4 flex justify-around items-center">
            <a className={`flex flex-col items-center text-gray-500 gap-1` + (active === 'updates' ? " activefooter" : " inactivefooter")} >
                <CgNotes className="text-3xl"/>
                <span className="text-sm">Updates</span>
            </a>
            <a className={`flex flex-col items-center text-gray-500 gap-1` + (active === 'schedule' ? " activefooter" : " inactivefooter")}>
                <MdOutlineCalendarMonth className="text-3xl" />
                <span className="text-sm">Schedule</span>
            </a>
        </footer>
    );
}

export default FooterMenu;