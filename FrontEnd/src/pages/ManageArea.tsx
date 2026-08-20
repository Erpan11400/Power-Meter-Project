import { useLocation, useNavigate } from "react-router-dom"
import AddArea from "../components/FormInput/AddArea"
import EditArea from "../components/FormInput/EditArea"
import { BsPencil } from "react-icons/bs"
import { useState } from "react"
import { LandPlot } from "lucide-react"

export default function ManageArea() {
    const navigate = useNavigate()
    const [canEdit, setCanEdit] = useState(true)
    const location = useLocation()
    const path = location.pathname.split('/')[2]

    const edit = (id: number) => {
        setCanEdit(prev => !prev)
        navigate(`edit-area/${id}`)
    }

    return (
        <>
            <article className="flex justify-between mb-40">
                <div>
                    <h2 className="text-titlePage font-semibold border-b-2 border-cGreen1">Manage Area</h2>
                </div>
                <div className="text-end font-semibold text-black/40">
                    <p>Number of Area: 7</p>
                </div>
            </article>

            <div className="flex justify-between">
                <article className="w-402">
                    {
                        path === 'edit-area' ? (<EditArea />) : (<AddArea />)
                    }
                </article>

                <article className={`flex flex-col w-550 bg-white border-2 border-cGreen1 rounded-3xl overflow-hidden`}>
                    <div className="flex justify-center items-center h-60 border-b-2 border-cGreen1">
                        <p className="font-semibold">Department List</p>
                    </div>
                    <div className="max-h-600 overflow-y-auto hide-scrollbar">
                        <div className="flex flex-col gap-15">
                            {
                                [...Array(5)].map((_, idx) => {
                                    return <div key={idx} className="h-120 grid grid-cols-8 bg-linear-to-r from-cGreen2/40 to-white">
                                        <div className="col-span-4 h-full flex flex-col items-center justify-center gap-17 relative">
                                            <LandPlot size={120} strokeWidth={1} className="absolute top-0 left-0 text-black/7" />
                                            <p>Area Name</p>
                                            <p className="font-semibold text-xl">PP-CHILLER-ONC</p>
                                        </div>
                                        <div className="col-span-2 h-full flex flex-col justify-center items-center gap-8">
                                            <p>Status</p>
                                            <div className="bg-white px-8 py-2 border border-cGreen1 rounded-xl">
                                                <p className="text-cGreen1 font-semibold">Online</p>
                                            </div>
                                        </div>
                                        <div className="col-span-2 h-full flex justify-center items-center">
                                            {
                                                canEdit ? (
                                                    <button className="p-5 bg-cYellow" onClick={() => edit(idx)}>
                                                        <BsPencil size={27} />
                                                    </button>
                                                ) : (
                                                    <div className="p-5 bg-cYellow opacity-30">
                                                        <BsPencil size={27} />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}
