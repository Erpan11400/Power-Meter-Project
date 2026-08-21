import { useState, type ChangeEvent } from "react"
import { BiChevronDown } from "react-icons/bi"
import PopUpInput from "../PopUpInput"

export default function AddUser() {
    const [popUp, setPopUp] = useState(false)
    const [maxName, setMaxName] = useState(30)
    const [maxEmail, setMaxEmail] = useState(30)
    const [user, setUser] = useState({
        userName: '',
        email: '',
        depart: '',
        role: ''
    })

    const onChangeInput = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
        if (name === 'userName') setMaxName(30 - value.length)
        else if (name === 'email') setMaxEmail(30 - value.length)
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
                    <p className="text-center font-semibold mb-60">Add New User Here</p>
                    <div className="mb-30">
                        <div className="flex justify-between">
                            <p>User Name</p>
                            <input type="text" name="userName" className="w-191 px-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={user.userName} onChange={onChangeInput} maxLength={30} />
                        </div>
                        {
                            maxName > 29 ? (<p className="text-end text-xs">Max Letter: {maxName}</p>) : maxName > 10 ? (<p className="text-end text-xs">{maxName} Letter Left</p>) : (<p className="text-end text-cRed text-xs">{maxName} Letter Left</p>)
                        }
                    </div>
                    <div className="mb-30">
                        <div className="flex justify-between">
                            <p>Email</p>
                            <input type="email" name="email" className="w-191 px-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl outline-none" value={user.email} onChange={onChangeInput} maxLength={30} />
                        </div>
                        {
                            maxEmail > 29 ? (<p className="text-end text-xs">Max Letter: {maxEmail}</p>) : maxEmail > 10 ? (<p className="text-end text-xs">{maxEmail} Letter Left</p>) : (<p className="text-end text-cRed text-xs">{maxEmail} Letter Left</p>)
                        }
                    </div>
                    <div className="mb-38">
                        <div className="flex justify-between">
                            <p>Department Name</p>
                            <div className="flex items-center gap-10 relative w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl">
                                <select name="depart" value={user.depart} onChange={onChangeInput} className={`w-full appearance-none outline-none`}>
                                    <option value='' disabled>Choice</option>
                                    {/* Nanti tambahan dari get data */}
                                    <option value="a">a</option>
                                    <option value="b">b</option>
                                    <option value="c">c</option>
                                </select>
                                <BiChevronDown size={20} className="absolute right-10 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-40">
                        <div className="flex justify-between">
                            <p>Role</p>
                            <div className="flex items-center gap-10 relative w-191 ps-10 py-3 bg-white border-2 border-cGreen1 rounded-3xl">
                                <select name="role" value={user.role} onChange={onChangeInput} className={`w-full appearance-none outline-none`}>
                                    <option value='' disabled>Choice</option>
                                    {/* Nanti tambahan dari get data */}
                                    <option value="a">a</option>
                                    <option value="b">b</option>
                                    <option value="c">c</option>
                                </select>
                                <BiChevronDown size={20} className="absolute right-10 pointer-events-none" />
                            </div>
                        </div>
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
