import { useEffect, useState, type ChangeEvent } from 'react'
import { BiChevronDown } from 'react-icons/bi'

export default function AddPowerMeter() {
    // Get dari database
    const [percentage, setPercentage] = useState(20)
    const [maxCode, setMaxCode] = useState(15)
    const [maxName, setMaxName] = useState(15)
    // Get data berdasarkan database
    const [area, setArea] = useState('null')
    const [pmInput, setPmInput] = useState({
        areaName: 'null',
        pmCode: '',
        pmName: '',
        allocation: false,
        allocation_power: 0
    })

    const onChangeInput = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value, type } = e.target
        setPmInput(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? e.target.checked : value
        }))
        if (name === 'pmCode') setMaxCode(15 - value.length)
        else if (name === 'pmName') setMaxName(15 - value.length)
    }

    useEffect(() => {
        console.log(pmInput)
    }, [pmInput])

    return (
        <>
            <div className="mb-38">
                <div className="flex justify-between">
                    <p>Area Name</p>
                    <div className="flex items-center gap-10 relative w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl">
                        <select name="areaName" value={pmInput.areaName} onChange={onChangeInput} className={`w-full appearance-none outline-none`}>
                            <option value="null">Default</option>
                            {/* Nanti tambahan dari get data */}
                            <option value="b">b</option>
                            <option value="c">c</option>
                        </select>
                        <BiChevronDown size={20} className="absolute right-10 pointer-events-none" />
                    </div>
                </div>
            </div>
            <div className="mb-30">
                <div className="flex justify-between">
                    <p>Power Meter Code</p>
                    <input type="text" name="pmCode" className="w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={pmInput.pmCode} onChange={onChangeInput} />
                </div>
                {
                    maxCode > 14 ? (<p className="text-end text-xs">Max Letter: {maxCode}</p>) : maxCode > 5 ? (<p className="text-end text-xs">{maxCode} Letter Left</p>) : (<p className="text-end text-cRed text-xs">{maxCode} Letter Left</p>)
                }
            </div>
            <div className="mb-30">
                <div className="flex justify-between">
                    <p>Power Meter Name</p>
                    <input type="text" name="pmName" className="w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={pmInput.pmName} onChange={onChangeInput} />
                </div>
                {
                    maxName > 14 ? (<p className="text-end text-xs">Max Letter: {maxName}</p>) : maxName > 5 ? (<p className="text-end text-xs">{maxName} Letter Left</p>) : (<p className="text-end text-cRed text-xs">{maxName} Letter Left</p>)
                }
            </div>
            <div className={`${pmInput.allocation ? 'mb-10' : 'mb-40'}`}>
                <div className="flex justify-end items-center gap-5">
                    <p className='text-sm text-black/20'>Allocation Percentage</p>
                    <input type="checkbox" name="allocation" checked={pmInput.allocation} onChange={onChangeInput} />
                </div>
            </div>
            {
                pmInput.allocation && (
                    <div className="mb-40">
                        <div className="flex justify-end items-center relative">
                            <input type="number" name="allocation_power" min={0} max={100} className='w-85 px-10 py-2 bg-white border-2 border-cGreen1 rounded-xl outline-none text-sm' value={pmInput.allocation_power} onChange={onChangeInput} />
                            <span className='absolute right-32'>%</span>
                        </div>
                        <p className="text-end text-black/30 text-xs">{percentage} % left</p>
                    </div>
                )
            }
            <div className="flex justify-end">
                <button className="px-24 py-3 bg-white border-2 border-cGreen1 shadow-[0px_4px_7px_#7CFF79] rounded-xl">
                    <p>Add</p>
                </button>
            </div>
        </>
    )
}
