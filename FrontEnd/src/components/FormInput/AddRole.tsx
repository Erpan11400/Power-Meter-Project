import { useState, type ChangeEvent } from "react"
import PopUpInput from "../PopUpInput"

export default function AddRole() {
    const [popUp, setPopUp] = useState(false)
    const [maxName, setMaxName] = useState(20)
    const [maxDesc, setMaxDesc] = useState(50)
    const [role, setRole] = useState({
        roleName: '',
        roleDesc: ''
    })

    const onChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setRole(prev => ({
            ...prev,
            [name]: value
        }))
        if (name === 'roleName') setMaxName(20 - value.length)
        else if (name === 'roleDesc') setMaxDesc(50 - value.length)
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
                    <p className="text-center font-semibold mb-60">Add New Role Here</p>
                    <div className="mb-30">
                        <div className="flex justify-between">
                            <p>Role Name</p>
                            <input type="text" name="roleName" className="w-191 px-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={role.roleName} onChange={onChangeInput} maxLength={20} />
                        </div>
                        {
                            maxName > 19 ? (<p className="text-end text-xs">Max Letter: {maxName}</p>) : maxName > 10 ? (<p className="text-end text-xs">{maxName} Letter Left</p>) : (<p className="text-end text-cRed text-xs">{maxName} Letter Left</p>)
                        }
                    </div>
                    <div className="mb-40">
                        <div className="flex justify-between">
                            <p>Role Description</p>
                            <textarea name="roleDesc" className="w-191 h-100 p-10 bg-white border-2 border-cGreen1 rounded-3xl outline-none resize-none" value={role.roleDesc} onChange={onChangeInput} maxLength={50} />
                        </div>
                        {
                            maxDesc > 49
                                ? <p className="text-end text-xs">Max Letter: {maxDesc}</p>
                                : maxDesc > 10
                                    ? <p className="text-end text-xs">{maxDesc} Letter Left</p>
                                    : <p className="text-end text-cRed text-xs">{maxDesc} Letter Left</p>
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
