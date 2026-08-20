export default function UserSetting() {
    return (
        <>
            <article className="flex mb-40">
                <h2 className="text-titlePage font-semibold border-b-2 border-cGreen1">User Setting</h2>
            </article>

            <article className="flex items-end">
                <div className="pb-8 border-b-2 border-cGreen1">
                    <p className="px-10 py-3 bg-cGreen2/40 border-2 border-cGreen1 rounded-xl">Add User</p>
                </div>
                <div className="w-20 border-b-2 border-gray-300" />
                <div className="pb-8 border-b-2 border-cGreen1">
                    <p className="px-10 py-3 bg-cGreen2/40 border-2 border-cGreen1 rounded-xl">Add User Permission</p>
                </div>
                <div className="w-20 border-b-2 border-gray-300" />
                <div className="pb-8 border-b-2 border-cGreen1">
                    <p className="px-10 py-3 bg-cGreen2/40 border-2 border-cGreen1 rounded-xl">Add Role</p>
                </div>
                <div className="w-20 border-b-2 border-gray-300" />
                <div className="pb-8 border-b-2 border-cGreen1">
                    <p className="px-10 py-3 bg-cGreen2/40 border-2 border-cGreen1 rounded-xl">Add Feature</p>
                </div>

                <div className="flex-1 h-2 bg-gray-300" />
            </article>
        </>
    )
}
