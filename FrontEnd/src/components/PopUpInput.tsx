import type { Dispatch, SetStateAction } from "react"

interface props {
    typeTransaction: string
    setPopUp: Dispatch<SetStateAction<boolean>>
    addData: () => void
}

export default function PopUpInput({ typeTransaction, setPopUp, addData }: props) {
    return (
        <div className="fixed left-0 top-0 w-full h-full bg-black/70 flex justify-center items-center">
            <div className="w-1/3 p-20 flex flex-col bg-white rounded-lg">
                <p className="font-bold text-cRed text-2xl mb-15">Warning</p>
                <p className="mb-40">Are you sure you want to {typeTransaction.toLowerCase()} this data?</p>
                <div className="flex justify-end gap-20">
                    <button className="px-24 py-3 bg-cYellow rounded-xl" onClick={() => setPopUp(prev => !prev)}>
                        <p>Cancel</p>
                    </button>
                    <button className="px-24 py-3 bg-cGreen2 rounded-xl" onClick={() => addData()}>
                        <p>Yes</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
