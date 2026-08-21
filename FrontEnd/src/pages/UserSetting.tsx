import { useNavigate, useParams } from "react-router-dom"
import AddUser from "../components/FormInput/AddUser"
import UserPermission from "../components/FormInput/UserPermission"
import AddRole from "../components/FormInput/AddRole"
import AddFeature from "../components/FormInput/AddFeature"

export default function UserSetting() {

    const { menu } = useParams()
    const navigate = useNavigate()

    const menus = [
        {
            id: 1,
            name: 'Add User',
            path: 'add-user',
            page: <AddUser />
        },
        {
            id: 2,
            name: 'User Permission',
            path: 'user-permission',
            page: <UserPermission />
        },
        {
            id: 3,
            name: 'Add Role',
            path: 'add-role',
            page: <AddRole />
        },
        {
            id: 4,
            name: 'Add Feature',
            path: 'add-feature',
            page: <AddFeature />
        },
    ]

    const selectedMenu = menus.find((m) => m.path === menu)

    const changePage = (path: string) => {
        navigate(`/user-setting/${path}`)
    }

    return (
        <>
            <article className="flex mb-40">
                <h2 className="text-titlePage font-semibold border-b-2 border-cGreen1">
                    User Setting
                </h2>
            </article>

            <article className="flex items-end mb-30">

                {
                    menus.map((m) => {
                        const isActive = m.path === menu
                        return (
                            <div key={m.id} className="flex">

                                <div className={`pb-8 ${isActive ? 'border-b-2 border-cGreen1' : 'border-b-2 border-gray-300'}`} >
                                    <button className={`px-10 py-3 transition-colors duration-300 ${ isActive ? 'bg-cGreen2/40 border-2 border-cGreen1 rounded-xl' : '' }`} onClick={() => changePage(m.path)} >{m.name}</button>
                                </div>
                                <div className="w-20 border-b-2 border-gray-300" />
                            </div>
                        )
                    })
                }
                <div className="flex-1 h-2 bg-gray-300" />
            </article>

            <article>
                {selectedMenu!.page}
            </article>
        </>
    )
}