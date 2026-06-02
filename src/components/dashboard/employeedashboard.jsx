import React from 'react'
import Header from "../others/header";
import Tasklistnumber from "../others/tasklistnumber";
import Tasklist from "../tasklist/tasklist";

const EmployeeDashboard = ({ changeUser, data }) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={changeUser} data={data} />
      <Tasklistnumber data={data} />
      <Tasklist data={data} />
    </div>
  );
};

export default EmployeeDashboard;