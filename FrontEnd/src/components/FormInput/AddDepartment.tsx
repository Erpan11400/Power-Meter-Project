import { useState, type ChangeEvent } from "react"
import { useStringInput } from "../../utils/util"

export default function AddDepartment() {
    const [max, setMax] = useState(15)
    const [departName, setDepartName] = useStringInput()

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        setDepartName(input)
        setMax(15 - input.length)
    }

    return (
        <>
            <div className="mb-40">
                <div className="flex justify-between">
                    <p>Department Name</p>
                    <input type="text" name="departName" className="w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={departName} onChange={onChangeInput} />
                </div>
                {
                    max > 14 ? (<p className="text-end text-xs">Max Letter: {max}</p>) : max > 5 ? (<p className="text-end text-xs">{max} Letter Left</p>) : (<p className="text-end text-cRed text-xs">{max} Letter Left</p>)
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
