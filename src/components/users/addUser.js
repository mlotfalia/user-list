import React, { useState } from "react";

export default function AddUser({ addUser }) {

  const [showModal, setShowModal] = useState(false);
  
  const [user, setUser] = useState({
    userName: "",
    tel: "",
    email: "",
    membership: "مرد",
    date: Date.now()
  });

  const addUserHandler = (e) => {
    e.preventDefault();
    addUser(prevState => [{...user, id: Date.now()}, ...prevState]);
    setShowModal(false);
  };

  const changeInput = ({target: {name, value}}) => setUser({...user, [name]: value});

  return (
    <>
      <div className="flex justify-between">
        <span className="m-3  text-blue-800 font-bold text-2xl">لیست کاربران</span>
        <button onClick={() => setShowModal(true)} className="bg-blue-800 text-white active:bg-blue-600 font-bold uppercase text-sm px-4  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          اضافه کردن کاربر جدید
        </button>
      </div>

      {
        showModal 
        ? 
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
                      <input onChange={changeInput} name="userName" placeholder="نام کاربری" className="text-right py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-2 border border-gray-300" />
                    </div>
                    
                    <div className="mb-3 pt-0">
                      <input onChange={changeInput} type="number" name="tel" placeholder="تلفن" className="text-right px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full border border-gray-300" />
                    </div>

                    <div className=" mb-3 pt-0">
                      <input onChange={changeInput} name="email" placeholder="ایمیل" className="text-right px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full border border-gray-300" />
                    </div>

                    <div className=" mb-3 pt-0">
                      <select value={user.membership} onChange={changeInput} name="membership" className="text-right px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full border border-gray-300">
                        <option value="مرد">مرد</option>
                        <option value="زن">زن</option>
                      </select>
                    </div>

                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button onClick={() => setShowModal(false)} className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      بستن
                    </button>

                    <button type="submit" className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      ثبت اطلاعات
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </form>
        : null
      }
    </>
  );
}
