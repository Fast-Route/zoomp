'use client';
import Location from "@/icons/Location";
import { AiFillClockCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import {springfieldAdress, baltimoreAdress, orlandoAdress} from '@/constants/Address';

interface ListSectionProps {
    id: string;
}

interface Data {
    letter: string;
    city: string;
    station: string;
    packageNumber: string;
    packageQuantity: string;
    time: string;
}

function ListSection({ id }: ListSectionProps) {
    const [route, setRoute] = useState<Data>({
        letter: '',
        city: '',
        station: '',
        packageNumber: '',
        packageQuantity: '',
        time: '',
    });

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('route') || '{}');
        setRoute(data);
    }, []);

    const calculateScheduled = () => {
        const hour = new Date().getHours();

        switch (true) {
            case hour >= 0 && hour < 4:
                return '08:00 Today';
            case hour > 4 && hour < 7:
                return '11:00 Today';
            case hour > 7 && hour < 11:
                return '15:00 Today';
            case hour > 11 && hour < 13:
                return '18:00 Today';
            case hour > 13 && hour < 19:    
                return '22:00 Today';
            default:
                return '00:00 Today';
        }
    };   

    const vencimento = calculateScheduled();

    const arrayAddress = () => {
        const quantity = Number(route.packageQuantity);

        const array = [];
        if (route.station === 'Springfield') {
            for (let i = 0; i < quantity; i++) {
                array.push({
                    id: i + 2,
                    address: `${springfieldAdress[i].number} ${springfieldAdress[i].street}`,
                });
            }
        };

        if (route.station === 'Elkridge' || route.station === 'Baltimore') {
            for (let i = 0; i < quantity; i++) {
                array.push({
                    id: i + 2,
                    address: `${baltimoreAdress[i].number} ${baltimoreAdress[i].street}`,
                });
            }
        };

        if (route.station === 'Westborough') {
            for (let i = 0; i < quantity; i++) {
                array.push({
                    id: i + 2,
                    address: `${springfieldAdress[i].number} ${springfieldAdress[i].street}`,
                });
            }
        };

        if (route.station === 'Orlando') {
            for (let i = 0; i < quantity; i++) {
                array.push({
                    id: i + 2,
                    address: `${orlandoAdress[i].number} ${orlandoAdress[i].street}`,
                });
            }
        };
        
        return array;

        
    };
    
    return (
        <div id={id} className="flex flex-col w-full h-full bg-white">
            <div className="w-full h-[130px] bg-gray-200 relative flex text-sm">
                <div className="relative ml-2 py-4">
                    <span className="z-10 absolute left-[0.6rem] top-[1.2rem] text-[12px]">1</span>
                    <FaCheckCircle size={10} className="absolute left-[1.2rem] text-[#07AB51]" />
                    <Location w={26} h={26} fill="#9ca3af" />
                    <div className="absolute left-3 top-0 border-l border-[#9ca3af] h-full"></div>
                </div>
                <div className="relative text-gray-500 w-full ml-4 flex flex-col justify-center border-b border-[#c4c8d1] text-[15.5px] gap-2">
                    <p>Picked up at <span>{route.time}</span></p>
                    <p>6885 Commercial Dr.</p>
                    <p className="uppercase">{ route.station }</p>
                </div>
            </div>
            {
                arrayAddress().map((item, index) => (
                    <div key={index} className="z-10 w-full h-[110px] bg-foreground relative flex text-sm">
                        <div className="relative ml-2 py-4">
                            <span className={ item.id > 9 ? "absolute order-2 left-[0.4rem] top-[1.15rem] text-[12px]" : "absolute order-2 left-[0.6rem] top-[1.15rem] text-[12px]"}>{item.id}</span>
                            <Location w={26} h={26} fill={ index === 0 ? "#07AB51" : "#464747" } />
                            <div className="absolute z-[-50] left-3 top-0 border-l border-[#9ca3af] h-full"></div>
                        </div>
                        <div className="relative text-gray-600 w-full ml-4 flex flex-col justify-center border-b border-[#c4c8d1] text-[15.5px]">
                            { index === 0 && <span className='text-[#07AB51] leading-tight'>Next Stop:</span>}
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center gap-1 leading-tight">
                                    <AiFillClockCircle className="text-[#42aaff]" />
                                    <span className=""># {route.letter}.{route.packageNumber}.OV • Scheduled 0:01 - {vencimento}</span>
                                </div>
                                <p className="uppercase">{item.address}</p>
                                <p className="uppercase">{route.city}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ListSection;
