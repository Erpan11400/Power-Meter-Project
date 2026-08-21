import { useEffect, useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react"
import { useStringInput } from "../../utils/util"
import { useParams } from "react-router-dom"

interface props {
    setType: Dispatch<SetStateAction<string>>
    doubleCheck: () => void
}

export default function EditDepartment({ setType, doubleCheck }: props) {
    const [isActive, setIsActive] = useState(true)
    const { id } = useParams()
    const [max, setMax] = useState(15)
    // Get data berdasarkan database
    const [departName, setDepartName] = useStringInput()

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        setDepartName(input)
        setMax(15 - input.length)
    }

    // useEffect(() => {
    //     console.log(isActive)
    // }, [isActive])

    return (
        <>
            <div className="mb-30">
                <div className="flex justify-between">
                    <p>New Department Name</p>
                    <input type="text" name="departName" className="w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={departName} onChange={onChangeInput} maxLength={15} />
                </div>
                {
                    max > 14 ? (<p className="text-end text-xs">Max Letter: {max}</p>) : max > 5 ? (<p className="text-end text-xs">{max} Letter Left</p>) : (<p className="text-end text-red-500 text-xs">{max} Letter Left</p>)
                }
            </div>
            <div className="mb-40 flex justify-between">
                <p>Status Active</p>
                <button
                    className={`relative w-100 h-35 rounded-full transition-colors duration-300 ${isActive ? "bg-cGreen2" : "bg-cRed"}`} onClick={() => setIsActive((prev) => !prev)}>
                    <div className={`absolute top-5 w-25 h-25 bg-white rounded-full transition-transform duration-300 ${isActive ? "translate-x-70" : "translate-x-5"}`} />

                    <span className={`absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${isActive ? "left-16 text-black" : "right-10 text-white"}`}>
                        {isActive ? "Active" : "Inactive"}
                    </span>
                </button>
            </div>
            <div className="flex justify-end gap-20">
                <button className="px-24 py-3 bg-white border-2 border-cYellow shadow-[0px_4px_7px_#FFE944] rounded-xl" onClick={() => window.location.href = '/manage-department'}>
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
