export default function DepartmentList() {
    return (
        <div className={`flex flex-col w-full bg-white border-2 border-cGreen1 rounded-3xl overflow-hidden`}>
            <div className="flex justify-center items-center h-60 border-b-2 border-cGreen1">
                <p className="font-semibold">Department List</p>
            </div>
            <div className="h-342 overflow-y-auto hide-scrollbar">
                <table className="w-full table-fixed">
                    <thead className="sticky top-0">
                        <tr className="h-54 bg-cGreen2">
                            <th className="w-[33%] ps-10 text-start font-medium">Department Name</th>
                            <th className="w-[27%] font-medium">Total Cost (Rp)</th>
                            <th className="w-[23%] font-medium">Total kWh (kWh)</th>
                            <th className="w-[17%] font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            [...Array(15)].map((_, inx) => {
                                return <tr key={inx} className="h-37 even:bg-cGreen2/30">
                                    <td className="ps-10 text-start">Produksi Fl.1</td>
                                    <td>Rp1.200.000.000</td>
                                    <td>1309234 kWh</td>
                                    <td>
                                        <div className="h-full flex justify-center items-center gap-8">
                                            <div className="w-10 h-10 rounded-full bg-cGreen2" />
                                            <div><p>Active</p></div>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
