import React from 'react'

const AcceptTask = ({ data }) => {
    console.log("AcceptTask Data:", data);

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl'>
      
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

      <div className='flex justify-between gap-2 mt-6'>
        <button className='bg-green-600 text-white py-1 px-2 text-sm rounded w-full'>
          Mark As Completed
        </button>

        <button className='bg-red-600 text-white py-1 px-2 text-sm rounded w-full'>
          Mark As Failed
        </button>
      </div>

    </div>
  )
}

export default AcceptTask