import { useEffect, useState, type ChangeEvent, type Dispatch, type SetStateAction } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { useParams } from 'react-router-dom'

interface props {
    setType: Dispatch<SetStateAction<string>>
    doubleCheck: () => void
}

export default function EditArea({ setType, doubleCheck }: props) {
    const { id } = useParams()
    const [maxCode, setMaxCode] = useState(15)
    const [maxName, setMaxName] = useState(15)
    // Get data berdasarkan database
    const [department, setDepartment] = useState('null')
    const [areaInput, setAreaInput] = useState({
        department: 'null',
        areaCode: '',
        areaName: '',
        isActive: true
    })

    const onChangeInput = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target
        setAreaInput(prev => ({
            ...prev,
            [name]: value
        }))
        if (name === 'areaCode') setMaxCode(15 - value.length)
        else if (name === 'areaName') setMaxName(15 - value.length)
    }

    // useEffect(() => {
    //     console.log(areaInput)
    // }, [areaInput])

    return (
        <>
            <div className="mb-38">
                <div className="flex justify-between">
                    <p>New Department Name</p>
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
                    <p>New Area Code</p>
                    <input type="text" name="areaCode" className="w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={areaInput.areaCode} onChange={onChangeInput} maxLength={15} />
                </div>
                {
                    maxCode > 14 ? (<p className="text-end text-xs">Max Letter: {maxCode}</p>) : maxCode > 5 ? (<p className="text-end text-xs">{maxCode} Letter Left</p>) : (<p className="text-end text-cRed text-xs">{maxCode} Letter Left</p>)
                }
            </div>
            <div className="mb-30">
                <div className="flex justify-between">
                    <p>New Area Name</p>
                    <input type="text" name="areaName" className="w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={areaInput.areaName} onChange={onChangeInput} maxLength={15} />
                </div>
                {
                    maxName > 14 ? (<p className="text-end text-xs">Max Letter: {maxName}</p>) : maxName > 5 ? (<p className="text-end text-xs">{maxName} Letter Left</p>) : (<p className="text-end text-cRed text-xs">{maxName} Letter Left</p>)
                }
            </div>
            <div className="mb-40 flex justify-between">
                <p>Status Active</p>
                <button
                    className={`relative w-100 h-35 rounded-full transition-colors duration-300 ${areaInput.isActive ? "bg-cGreen2" : "bg-cRed"}`} onClick={() => setAreaInput(prev => ({ ...prev, isActive: !prev.isActive }))}>
                    <div className={`absolute top-5 w-25 h-25 bg-white rounded-full transition-transform duration-300 ${areaInput.isActive ? "translate-x-70" : "translate-x-5"}`} />

                    <span className={`absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${areaInput.isActive ? "left-16 text-black" : "right-10 text-white"}`}>
                        {areaInput.isActive ? "Active" : "Inactive"}
                    </span>
                </button>
            </div>
            <div className="flex justify-end gap-20">
                <button className="px-24 py-3 bg-white border-2 border-cYellow shadow-[0px_4px_7px_#FFE944] rounded-xl" onClick={() => window.location.href = '/manage-area'}>
                    <p>Cancel</p>
                </button>
                <button className="px-24 py-3 bg-white border-2 border-cGreen1 shadow-[0px_4px_7px_#7CFF79] rounded-xl" onClick={() => {
                    setType('change')
                    doubleCheck()
                }}>
                    <p>Update</p>
                </button>
            </div>
        </>
    )
}
