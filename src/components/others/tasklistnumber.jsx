import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className="flex justify-between gap-5 mt-10 w-full">
      <div className="w-[50%] px-6 py-10 rounded-xl bg-red-400 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">{data?.taskNumbers?.newTask}</h2>
        <h3 className="text-lg font-semibold">New TASKS</h3>
      </div>
      <div className="w-[50%] px-6 py-10 rounded-xl bg-emerald-500 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">{data.taskNumbers.active}</h2>
        <h3 className="text-lg font-semibold">Active tasks</h3>
      </div> 
      <div className="w-[50%] px-6 py-10 rounded-xl bg-blue-500 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">{data.taskNumbers.completed}</h2>
        <h3 className="text-lg font-semibold">completed tasks</h3> 
      </div>
      <div className="w-[50%] px-6 py-10 rounded-xl bg-yellow-400 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">{data.taskNumbers.failed}</h2>
        <h3 className="text-lg font-semibold">Failed tasks</h3>
      </div>
    </div>
  )
}                                                                                                     
export default TaskListNumber
