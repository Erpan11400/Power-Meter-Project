import { useState, type ChangeEvent } from "react"
import { useStringInput } from "../../utils/util"
import PopUpInput from "../PopUpInput"

export default function AddFeature() {
    const [popUp, setPopUp] = useState(false)
    const [maxLength, setMaxLength] = useState(20)
    const [featureName, setFeatureName] = useStringInput()

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        setFeatureName(input)
        setMaxLength(20 - input.length)
    }

    const doublecheck = () => {
        setPopUp(prev => !prev)
    }

    const addData = () => {
        setPopUp(prev => !prev)
        window.location.href = '/manage-area'
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-450 p-20 border-2 border-cGreen1 shadow-[0px_4px_10px_#7CFF79] rounded-2xl">
                    <p className="text-center font-semibold mb-60">Add New Feature Here</p>
                    <div className="mb-40">
                        <div className="flex justify-between">
                            <p>Feature Name</p>
                            <input type="text" name="feature" className="w-191 px-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={featureName} onChange={onChangeInput} maxLength={20} />
                        </div>
                        {
                            maxLength > 19 ? (<p className="text-end text-xs">Max Letter: {maxLength}</p>) : maxLength > 10 ? (<p className="text-end text-xs">{maxLength} Letter Left</p>) : (<p className="text-end text-cRed text-xs">{maxLength} Letter Left</p>)
                        }
                    </div>
                    <div className="flex justify-end">
                        <button className="px-24 py-3 bg-white border-2 border-cGreen1 shadow-[0px_4px_7px_#7CFF79] rounded-xl" onClick={doublecheck}>
                            <p>Add</p>
                        </button>
                    </div>
                </div>
            </div>

            {
                popUp && <PopUpInput typeTransaction="add" setPopUp={setPopUp} addData={addData} />
            }
        </>
    )
}
