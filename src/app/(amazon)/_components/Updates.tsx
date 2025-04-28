import Image from "next/image";
import updates from "@/constants/Updates";

function Updates() {
    return (
        <div className="w-full h-full flex flex-col gap-2 pt-[3.6925rem] pb-[6.3rem] bg-gray-300">
            {
                updates.map((notification: any) => (
                    <div key={notification.id} className="flex flex-col bg-foreground gap-2 text-[var(--secondary-amazon)] p-4">
                        <div className="flex gap-2 items-center">
                            <Image src={notification.icon} alt={notification.title} width={36} height={40} />
                            <div>
                                <h3 className="text-lg font-bold leading-none">{notification.title}</h3>
                                <p className="text-xs">{notification.time}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">{notification.message}</p>
                            <a href="" className="text-[var(--primary-amazon)] self-end">Read more</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Updates;