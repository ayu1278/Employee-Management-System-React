import React from 'react'

const CompleteTask = ({ data }) => {
    console.log("COMPLETE TASK DATA:", data);
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>

      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>
          {data.category}
        </h3>

        <h4 className='text-sm'>
          {data.date}
        </h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold'>
        {data.title}
      </h2>

      <p className='text-sm mt-2'>
        {data.description}
      </p>

      <div className='mt-6'>
        <button className='bg-green-600 text-white py-2 px-3 text-sm rounded w-full'>
          Complete
        </button>
      </div>

    </div>
  )
}

export default CompleteTask