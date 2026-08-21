import { useState } from "react"
import PopUpInput from "../PopUpInput"

export default function UserPermission() {
    const [popUp, setPopUp] = useState(false)
    const roles = [
        { id: 1, name: "IT Admin" },
        { id: 2, name: "Manager" },
        { id: 3, name: "Engineer" },
        { id: 4, name: "Guest" },
    ]

    const features = [
        { id: 1, name: "Dashboard" },
        { id: 2, name: "Manage User" },
        { id: 3, name: "Manage Role" },
        { id: 4, name: "Manage Feature" },
        { id: 5, name: "Report" },
    ]

    const [permission, setPermission] = useState([
        {
            role: 1,
            feature: 1
        },
        {
            role: 1,
            feature: 2
        },
        {
            role: 1,
            feature: 3
        },
        {
            role: 1,
            feature: 4
        },
        {
            role: 1,
            feature: 5
        },

        {
            role: 2,
            feature: 1
        },
        {
            role: 2,
            feature: 2
        },
        {
            role: 2,
            feature: 3
        },
        {
            role: 2,
            feature: 4
        },
        {
            role: 2,
            feature: 5
        },

        {
            role: 3,
            feature: 1
        },
        {
            role: 3,
            feature: 5
        },

        {
            role: 4,
            feature: 1
        }
    ])

    const togglePermission = (roleId: number, featureId: number) => {

        const exists = permission.some(p => p.role === roleId && p.feature === featureId)

        if (exists) {
            setPermission(prev =>
                prev.filter(
                    p => !(
                        p.role === roleId &&
                        p.feature === featureId
                    )
                )
            )
        } else {
            setPermission(prev => [
                ...prev,
                {
                    role: roleId,
                    feature: featureId
                }
            ])
        }
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
            <article className="max-h-726 mb-40 bg-white border border-cGreen2 shadow-[0px_4px_7px_#7CFF79] rounded-2xl overflow-y-auto hide-scrollbar">
                <table className="border-separate border-spacing-0 w-full table-fixed">
                    <thead className="sticky top-0">
                        <tr>
                            <th rowSpan={2} className="border-b border-cGreen2">Feature</th>
                            <th colSpan={roles.length} className="py-3">Role</th>
                        </tr>
                        <tr>
                            {
                                roles.map((r) => {
                                    return <th key={r.id} className="py-4 border-b border-cGreen2">{r.name}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            features.map((f) => {
                                return <tr key={f.id} className="h-50">
                                    <td className="ps-10 font-medium border-b border-cGreen2">{f.name}</td>
                                    {
                                        roles.map((r) => {
                                            const hasPermission = permission.some(p => p.feature === f.id && p.role === r.id)
                                            return <td key={r.id} className="text-center border-b border-cGreen2">
                                                <input type="checkbox" checked={hasPermission} onChange={() => togglePermission(r.id, f.id)} className="w-15 h-15 accent-cGreen1" />
                                            </td>
                                        })
                                    }
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </article>
            <article>
                <div className="flex justify-end">
                    <button className="px-24 py-3 bg-white border-2 border-cGreen1 shadow-[0px_4px_7px_#7CFF79] rounded-xl" onClick={doublecheck}>
                        <p>Save</p>
                    </button>
                </div>
            </article>

            {
                popUp && <PopUpInput typeTransaction="save" setPopUp={setPopUp} addData={addData} />
            }
        </>
    )
}
