import { CiMoneyBill } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
import { TbWavesElectricity } from "react-icons/tb";

export default function Summary() {
    return (
        <div className="flex flex-col bg-white border-2 border-cGreen1 rounded-xl">
            <div className="grid grid-cols-2">
                <div className="w-full h-97 relative flex flex-col items-center justify-center border-e border-gray-500">
                    <TbWavesElectricity size={97} className="absolute left-0 text-black/10" />
                    <p>Total kWh</p>
                    <p className="font-semibold text-2xl">{'1101202'} kwh</p>
                </div>
                <div className="w-full h-97 relative flex flex-col items-center justify-center border-s border-gray-500">
                    <CiMoneyBill size={97} className="absolute left-0 text-black/10" />
                    <p>Electricity price per kWh</p>
                    <p className="font-semibold text-2xl">Rp{'1,352'}</p>
                </div>
            </div>
            <div className="p-1 bg-gray-500" />
            <div>
                <div className="w-full h-97 relative flex flex-col items-center justify-center">
                    <IoPricetagsOutline size={97} className="absolute left-0 text-black/10" />
                    <p>Total Price</p>
                    <p className="font-semibold text-2xl">Rp{'1.488.825.104'}</p>
                </div>
            </div>
        </div>
    )
}
