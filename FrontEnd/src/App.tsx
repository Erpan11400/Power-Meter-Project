import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import ManageDepartment from "./pages/ManageDepartment";
import ManageArea from "./pages/ManageArea";
import ManagePowerMeter from "./pages/ManagePowerMeter";
import Setting from "./pages/Setting";
import UserSetting from "./pages/UserSetting";

export default function App() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='ms-328 p-40'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/manage-department' element={<ManageDepartment />} />
          <Route path='/manage-department/edit-depart/:id' element={<ManageDepartment />} />
          <Route path='/manage-area' element={<ManageArea />} />
          <Route path='/manage-area/edit-area/:id' element={<ManageArea />} />
          <Route path='/manage-power-meter' element={<ManagePowerMeter />} />
          <Route path='/manage-power-meter/edit-pm/:id' element={<ManagePowerMeter />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/user-setting' element={<UserSetting />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}
