import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import useUserResume from '@/hooks/useUserResume'
import ResumeCardItem from './components/ResumeCardItem'

const Dashboard = () => {

  const {user}=useUser()
  const [resumesList,setResumesList]=useState([])
  const {getAllResume}=useUserResume()

  const allUsers=async()=>{
    const users=await getAllResume(user?.primaryEmailAddress?.emailAddress)
    setResumesList(users)

}


  useEffect(() => {
      
    user&&allUsers()

}, [user])
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume to your next job role</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
        <AddResume/>
        {
          resumesList.length>0&&resumesList.map((resume)=>(
            <ResumeCardItem key={resume.resumeId} resume={resume}/>
          ))

          
        }
      </div>
    </div>
  )
}

export default Dashboard