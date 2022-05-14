const TableHead = () => (
    <thead className="font-semibold bg-indigo-700 text-white">
        <tr>
            <th scope="col" className="px-6 py-3 text-center">
                نام کاربر
            </th>

            <th scope="col" className="px-6 py-3  text-right">
                ایمیل
            </th>

            <th scope="col" className="px-6 py-3  text-right">
                تلفن
            </th>

            <th scope="col" className="px-6 py-3  text-right">
                نوع عضویت
            </th>

            <th scope="col" className="px-6 py-3  text-right">
                تاریخ عضویت
            </th>

            <th scope="col" className="px-6 py-3">
                عملیات
            </th>
        </tr>
    </thead>
)

export default TableHead