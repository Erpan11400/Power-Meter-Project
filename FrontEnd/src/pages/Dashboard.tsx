import { HiOutlineRefresh } from "react-icons/hi"
import FilterBox from "../components/FormInput/FilterBox"
import Summary from "../components/Summary"
import DepartmentList from "../components/DepartmentList"
import AreaList from "../components/AreaList"
import PowerMeterList from "../components/PowerMeterList"

export default function Dashboard() {
  return (
    <>
      <article className="flex justify-between mb-20">
        <div>
          <h2 className="text-titlePage font-semibold border-b-2 border-cGreen1">Dashboard</h2>
        </div>
        <div className="flex items-center gap-20">
          <div className="flex flex-col items-end font-semibold text-black/40">
            <p>Last Updated:</p>
            <p>17 Aug 2026 18:30 PM</p>
          </div>
          <div className="flex items-center gap-5 px-20 py-7 bg-white border-2 border-cGreen1 shadow-[0px_4px_7px_#7CFF79] rounded-full">
            <HiOutlineRefresh size={22} />
            <p>Refresh</p>
          </div>
        </div>
      </article>
      <article className="flex gap-20 mb-20 items-stretch">
        <div className="flex flex-col gap-20">
          <FilterBox />
          <Summary />
        </div>
        <DepartmentList />
      </article>
      <article className="grid grid-cols-2 gap-20">
        <AreaList />
        <PowerMeterList />
      </article>
    </>
  )
}
