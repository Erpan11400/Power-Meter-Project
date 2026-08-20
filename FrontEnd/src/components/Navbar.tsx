import { FiLogIn } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBuildingAdd } from "react-icons/bs";
import { LandPlot } from "lucide-react";
import { RiMenuAddFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation()

    const navbarList = [
        {
            name: "Dashboard",
            path: '/',
            icon: <LuLayoutDashboard size={22}/>
        },
        {
            name: "Manage Department",
            path: '/manage-department',
            icon: <BsBuildingAdd size={22}/>
        },
        {
            name: "Manage Area",
            path: '/manage-area',
            icon: <LandPlot size={22}/>
        },
        {
            name: "Manage Power Meter",
            path: '/manage-power-meter',
            icon: <RiMenuAddFill size={22}/>
        },
        {
            name: "Setting",
            path: '/setting',
            icon: <FiSettings size={22}/>
        },
        {
            name: "User Setting",
            path: '/user-setting',
            icon: <AiOutlineUserAdd size={22}/>
        }
    ]

    const isActive = (path: string) => location.pathname.split('/')[1] === path.split('/')[1]

    return (
        <div className='fixed top-0 left-0 w-318 h-screen bg-white border-e-2 border-cGreen1 rounded-e-[20px] shadow-[5px_0px_10px_#7CFF79]'>
            <div className="h-full flex flex-col">
                <h1 className="text-title font-extrabold my-40 ms-40 me-30">Power Report</h1>
                <div className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-col gap-15">
                        {
                            navbarList.map((m, idx) => {
                                return <Link key={idx} to={m.path} className={`${isActive(m.path) ? 'bg-linear-to-r from-white to-cGreen1/40' : 'bg-white'} ps-40 py-17 me-30 flex items-center gap-18 rounded-e-[50px] navbar-transition navbar-hover`}>
                                    {m.icon}
                                    <p className={`${isActive(m.path) ? 'font-semibold' : ''}`}>{m.name}</p>
                                </Link>
                            })
                        }
                    </div>
                    <div className="flex justify-between items-center mb-40 ms-40 me-30">
                        <p className="font-semibold text-[18px]">Guest</p>
                        <div className="w-100 h-35 ps-10 py-8 flex items-center border-2 border-[#00568C] rounded-[20px] shadow-[0px_4px_10px_#79BEFF]">
                            <FiLogIn className="me-8" />
                            <p>Login</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
