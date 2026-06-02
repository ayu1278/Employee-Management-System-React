import React from "react";
import Header from "../others/header";
import CreateTask from "../others/createtask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {

  const adminData = {
    firstName: "Admin"
  };

  return (
    <div className="h-screen w-full bg-[#0f0f0f] text-white p-8">
      <Header changeUser={props.changeUser} />

      <CreateTask />
      
      <AllTask />
    </div>
  );
};

export default AdminDashboard;