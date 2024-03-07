import React from 'react'

function TeamCard({name,designation,about,photo}) {
  return (
    <div className='md:flex md:flex-row flex-col items-center md:py-2 py-4 md:pr-2 md:pl-0 pl-3 pr-3  bg-[#E7F4FD] w-[100%] rounded-md'>
        <div className="md:w-[10%]  flex flex-col  gap-[2px] items-center mb-4 md:mb-0">
            <div className=' md:w-[60%] w-[15%]'><img className='rounded-md object-cover' src={photo} alt={name} /></div>
            <div className='text-xs font-semibold'>{name}</div>
            <div className=' text-xs text-gray-500'>{designation}</div>
        </div>
        <div className='md:w-[90%] flex items-center justify-center'>
            <p>{about}Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat sunt eos commodi neque, 
                magni dolorem in distinctio esse! Fuga ex voluptate libero aliquam reprehenderit beatae neque magni optio modi.
                Fuga ex voluptate libero aliquam reprehenderit beatae t consectetur adipisicing elit. Quasi repellat sunt eos commodi neque, 
                magni dolorem in distinctio esse! Fuga ex voluptate libero aliquam reprehenderit beatae neque magni optio modi.
                Fuga ex voluptate libero aliquam reprehenderit beata  consectetur adipisicing elit. Quasi repellat sunt eos commodi neque, 
                magni dolorem in distinctio esse! Fuga ex interdu.
            </p>
        </div>
    </div>
  )
}

export default TeamCard