import { useState, type ChangeEvent } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";

export default function FilterBox() {
    const [fillteringBy, setFillteringBy] = useState({
        department: 'all',
        area: 'all',
        month: 'all',
        year: 'all'
    })

    const fillterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = e.target

        setFillteringBy(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const applyFilltering = () => {
        console.log(fillteringBy)
    }

    return (
        <div className="flex flex-col justify-center gap-10 p-10 bg-white border-2 border-cGreen1 rounded-xl">
            <div className="flex justify-center items-center gap-20">
                <BsFilter strokeWidth={.5} />
                <p>Filter</p>
            </div>
            <div className="flex gap-20">
                <div className="flex flex-col">
                    <p className="text-sm ps-15 mb-5">Department</p>
                    <div className="flex items-center gap-10 relative w-191 ps-10 py-3 border-2 border-cGreen1 rounded-3xl">
                        <select name="department" value={fillteringBy.department} onChange={fillterChange} className={`w-full appearance-none outline-none`}>
                            <option value="all">All</option>
                            <option value="b">b</option>
                            <option value="c">c</option>
                        </select>
                        <BiChevronDown size={20} className="absolute right-10 pointer-events-none" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm ps-15 mb-5">Area</p>
                    <div className="flex items-center gap-10 relative w-191 ps-10 py-3 border-2 border-cGreen1 rounded-3xl">
                        <select name="area" value={fillteringBy.area} onChange={fillterChange} className={`w-full appearance-none outline-none`}>
                            <option value="all">All</option>
                            <option value="b">b</option>
                            <option value="c">c</option>
                        </select>
                        <BiChevronDown size={20} className="absolute right-10 pointer-events-none" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-18">
                <div className="flex flex-col">
                    <p className="text-sm ps-15 mb-5">Month</p>
                    <div className="flex items-center gap-10 relative w-full ps-10 py-3 border-2 border-cGreen1 rounded-3xl">
                        <select name="month" value={fillteringBy.month} onChange={fillterChange} className={`w-full appearance-none outline-none`}>
                            <option value="all">All</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <BiChevronDown size={20} className="absolute right-10 pointer-events-none" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-sm ps-15 mb-5">Year</p>
                    <div className="flex items-center gap-10 relative w-full ps-10 py-3 border-2 border-cGreen1 rounded-3xl">
                        <select name="year" value={fillteringBy.year} onChange={fillterChange} className={`w-full appearance-none outline-none`}>
                            <option value="all">All</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                        </select>
                        <BiChevronDown size={20} className="absolute right-10 pointer-events-none" />
                    </div>
                </div>
                <div className="flex justify-center items-end">
                    <button onClick={applyFilltering} className="flex justify-center items-center bg-cGreen2 px-44 py-7 rounded-full">
                        <p>Apply</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
