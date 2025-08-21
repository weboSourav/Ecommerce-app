import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <div className=" p-10 h-full w-full bg-gray-800">
      <div>
      <Header />
    <CreateTask />
    <AllTask/>
</div>
   
    </div>
  );
};

export default AdminDashboard;
