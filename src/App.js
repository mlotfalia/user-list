import React from "react";
import addUser from "./components/addUser";
import tableUser from "./components/table";

export default function App() {
  return (
    <div className="App">
      <div className="container   m-4">
        <div className="flex justify-evenly">
          <addUser />
          <span className="m-3  text-blue-800 font-bold  ">لیست کاربران</span>
        </div>
        <div className="flex justify-center">
          <tableUser />
        </div>
      </div>
    </div>
  );
}
