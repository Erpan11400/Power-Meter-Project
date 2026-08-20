import { useNumberInput } from "../utils/util"

export default function Setting() {
    const [price, setPrice] = useNumberInput()

    return (
        <>
            <article className="flex mb-40">
                <h2 className="text-titlePage font-semibold border-b-2 border-cGreen1">Setting</h2>
            </article>

            <article className="mb-20 flex items-end">
                <div className="pb-8 border-b-2 border-cGreen1">
                    <p className="px-10 py-3 bg-cGreen2/40 border-2 border-cGreen1 rounded-xl">Electricity Price</p>
                </div>
                <div className="flex-1 h-2 bg-gray-300" />
            </article>

            <article className="flex flex-col w-400">
                <div className="mb-40">
                    <div className="flex justify-between items-center gap-20">
                        <p>Electricity Price per kWh</p>
                        <input type="number" name="price" className="w-191 ps-10 py-2 bg-white border-2 border-cGreen1 rounded-3xl outline-none no-arrow" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="px-24 py-3 bg-white border-2 border-cGreen1 shadow-[0px_4px_7px_#7CFF79] rounded-xl">
                        <p>Update</p>
                    </button>
                </div>
            </article>
        </>
    )
}
