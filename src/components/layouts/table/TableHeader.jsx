import React from 'react';

function TableHeader() {
    return (
        <>
            <thead className=" text-s text-gray-700  bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only"></span>
                </th>

                <th scope="col" className="px-6 py-3  text-right">
                    تاریخ عضویت
                </th>

                <th scope="col" className="px-6 py-3  text-right">
                    نوع عضویت
                </th>
                <th scope="col" className="px-6 py-3  text-right">
                    ایمیل
                </th>
                <th scope="col" className="px-6 py-3  text-right">
                    تلفن
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                    نام کاربر
                </th>
            </tr>
            </thead>
        </>
    );
}

export default TableHeader;