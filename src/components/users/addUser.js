import React, { useState } from "react";

export default function AddUser({ setUsers }) {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    tel: "",
    email: "",
    membership: "",
    date: "",
  });
  const addUserHandler = (e) => {
    e.preventDefault();

    setUsers((prevState) => {
      return [...prevState, user];
    });
    setShowModal(false);
  };

  const changeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <>
      <div className="flex justify-evenly">
        <button
          className="bg-blue-800 text-white active:bg-blue-600 font-bold uppercase text-sm px-4  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          اضافه کردن کاربر جدید
        </button>

        <span className="m-3  text-blue-800 font-bold  ">لیست کاربران</span>
      </div>

      {showModal ? (
        <form className="p-5 " onSubmit={addUserHandler}>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-bold text-center">
                    لطفا اطلاعات خود را وارد کنید
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="text"
                      name="userName"
                      placeholder="نام کاربری"
                      onChange={changeInput}
                      className="text-right py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
                    />
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <div className="mb-3 pt-0">
                    <input
                      type="number"
                      name="tel"
                      placeholder="تلفن"
                      onChange={changeInput}
                      className="text-right px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    />
                  </div>
                  <div className=" mb-3 pt-0">
                    <input
                      type="text"
                      name="email"
                      placeholder="ایمیل"
                      onChange={changeInput}
                      className="text-right px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    />
                  </div>
                  <div className=" mb-3 pt-0">
                    <input
                      type="text"
                      name="membership"
                      placeholder="نوع عضویت"
                      onChange={changeInput}
                      className="text-right px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    />
                  </div>

                  <div className="mb-3 pt-0">
                    <input
                      type="Date"
                      name="date"
                      placeholder="تاریخ عضویت"
                      onChange={changeInput}
                      className=" text-right px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    />
                  </div>
                </div>
                {/*footer*/}

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    بستن
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    ثبت اطلاعات
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </form>
      ) : null}
    </>
  );
}
