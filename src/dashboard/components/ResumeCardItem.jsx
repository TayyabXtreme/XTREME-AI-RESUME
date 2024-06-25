import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeCardItem = ({resume}) => {
  return (
    <Link to={`/dashboard/resume/${resume.resumeId}/edit`}>
    <div>
    <div className='p-14 bg-secondary flex items-center justify-center h-[250px] border border-primary rounded hover:scale-105 transition-all hover:shadow-md shadow-primary'>
        <Notebook/>

    </div>
    <h2 className='text-center my-1'>{resume.title}</h2>
    </div>
    </Link>
  )
}

export default ResumeCardItem