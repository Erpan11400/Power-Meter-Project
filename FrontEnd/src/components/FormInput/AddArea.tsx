import { useEffect, useState, type ChangeEvent } from 'react'
import { BiChevronDown } from 'react-icons/bi'

export default function AddArea() {
    const [maxCode, setMaxCode] = useState(15)
    const [maxName, setMaxName] = useState(15)
    // Get data berdasarkan database
    const [department, setDepartment] = useState('null')
    const [areaInput, setAreaInput] = useState({
        department: 'null',
        areaCode: '',
        areaName: ''
    })

    const onChangeInput = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target
        setAreaInput(prev => ({
            ...prev,
            [name]: value
        }))
        if (name === 'areaCode') setMaxCode(15 - value.length)
        else if (name === 'areaName') setMaxName(15 - value.length)
    }

    useEffect(() => {
        console.log(areaInput)
    }, [areaInput])

    return (
        <>
            <div className="mb-38">
                <div className="flex justify-between">
                    <p>Department Name</p>
                    <div className="flex items-center gap-10 relative w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl">
                        <select name="department" value={areaInput.department} onChange={onChangeInput} className={`w-full appearance-none outline-none`}>
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
                    <p>Area Code</p>
                    <input type="text" name="areaCode" className="w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={areaInput.areaCode} onChange={onChangeInput} />
                </div>
                {
                    maxCode > 14 ? (<p className="text-end text-xs">Max Letter: {maxCode}</p>) : maxCode > 5 ? (<p className="text-end text-xs">{maxCode} Letter Left</p>) : (<p className="text-end text-cRed text-xs">{maxCode} Letter Left</p>)
                }
            </div>
            <div className="mb-40">
                <div className="flex justify-between">
                    <p>Area Name</p>
                    <input type="text" name="areaName" className="w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={areaInput.areaName} onChange={onChangeInput} />
                </div>
                {
                    maxName > 14 ? (<p className="text-end text-xs">Max Letter: {maxName}</p>) : maxName > 5 ? (<p className="text-end text-xs">{maxName} Letter Left</p>) : (<p className="text-end text-cRed text-xs">{maxName} Letter Left</p>)
                }
            </div>
            <div className="flex justify-end">
                <button className="px-24 py-3 bg-white border-2 border-cGreen1 shadow-[0px_4px_7px_#7CFF79] rounded-xl">
                    <p>Add</p>
                </button>
            </div>
        </>
    )
}
