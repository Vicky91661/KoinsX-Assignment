import React from 'react'
import TeamCard from './TeamCard'
function Team() {
  return (
    <div className='p-4 px-6 bg-white rounded-md shadow-md flex flex-col gap-4 pb-10'>
        <div className=' text-xl font-bold'>Team</div>
        <div className=' font-medium text-sm'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quia unde sapiente consequatur fugiat quisquam 
                eaque saepe ratione corporis fugit esse libero animi in similique soluta ea consequuntur tenetur aliquid?</p>
        </div>
        

        <div className='flex flex-col gap-4 text-sm'> 
            <TeamCard name="Jhon Smith" designation="Designation here" about="" photo="https://images.unsplash.com/photo-1611431239888-d21bb1dd7bbe?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <TeamCard name="Elina Williams" designation="Designation here" about="" photo="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <TeamCard name="Jhon Smith" designation="Designation here" about="" photo="https://images.unsplash.com/photo-1602353195884-44ea7e76e196?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
    </div>
  )
}

export default Team