import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import useUserResume from '@/hooks/useUserResume'

import { Brain, LoaderCircle } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const prompt="Job Title: Full stack Developer , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format"
const Summary = ({enableNext}) => {

    

    const {resumeId} =useParams()
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

    const [summery,setSummery]=useState('')

    const {updateSummery,loading,result,setResult}=useUserResume()

    const { toast } = useToast()

    
    useEffect(()=>{

        summery?setResumeInfo({
            ...resumeInfo,
            summery
        }):setResumeInfo({
            ...resumeInfo,
            summery:''
        })

    },[summery])

    


    const onSave=(e)=>{
        e.preventDefault()

        const obj={
            summery:resumeInfo?.summery
        }
        
         updateSummery(resumeId,obj)

         if(result)
            {
        toast({
            title:'Detail Updated',
        })
        setResult(false)
        enableNext(true)
    }
         
         
         


    }


  return (
    <div>
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Summery</h2>
            <p>Add Summery for your job title</p>
            <form className='mt-7 ' onSubmit={onSave}>
            <div className='flex justify-between items-end'>
                <label>Add Summery</label>
                <Button type='button' variant='outline' className='border-primary text-primary flex gap-2' size='sm' ><Brain className='h-4 w-4'/> Generate from AI</Button>
            </div>
            <Textarea className='mt-5'
                required
                onChange={(e)=>setSummery(e.target.value)}
            />
            <div className='mt-2 flex justify-end'>
            <Button type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
            </div>
           </form>
           </div>
           
    </div>
  )
}

export default Summary