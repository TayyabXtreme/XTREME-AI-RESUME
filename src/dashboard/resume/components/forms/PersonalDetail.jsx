import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import useUserResume from '@/hooks/useUserResume'
import { LoaderCircle } from 'lucide-react'

import React, { useContext} from 'react'
import { useParams } from 'react-router-dom'

const PersonalDetail = ({enableNext}) => {

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

    const {resumeId} =useParams()

    const { toast } = useToast()


    const {updatePersonalDetailResume,loading,result,setResult}=useUserResume();

    const handleInputChange=(e)=>{
        enableNext(false)
        const {name,value}=e.target;
        setResumeInfo({
            ...resumeInfo,
            [name]:value
        })
        
    }

    const onSave=(e)=>{
        e.preventDefault()
        enableNext(true)
        const obj={
            firstName:resumeInfo?.firstName,
            lastName:resumeInfo?.lastName,
            jobTitle:resumeInfo?.jobTitle,
            address:resumeInfo?.address,
            phone:resumeInfo?.phone,
            email:resumeInfo?.email
        }
        
         updatePersonalDetailResume(resumeId,obj)

         if(result)
            {
        toast({
            title:'Detail Updated',
        })
        setResult(false)
    }
         
         
         
        
    }
    

   



    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Personal Detail</h2>
            <p>Get Started with the basic information</p>
           
    
            <form onSubmit={onSave}>
                <div className='grid grid-cols-2 mt-5 gap-3'>
                    <div>
                        <label className='text-sm'>First Name</label>
                        <Input name="firstName" defaultValue={resumeInfo?.firstName} required onChange={handleInputChange}  />
                    </div>
                    <div>
                        <label className='text-sm'>Last Name</label>
                        <Input name="lastName" required onChange={handleInputChange} 
                        defaultValue={resumeInfo?.lastName} />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Job Title</label>
                        <Input name="jobTitle" required 
                        defaultValue={resumeInfo?.jobTitle}
                        onChange={handleInputChange}  />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Address</label>
                        <Input name="address" required 
                        defaultValue={resumeInfo?.address}
                        onChange={handleInputChange}  />
                    </div>
                    <div>
                        <label className='text-sm'>Phone</label>
                        <Input name="phone" required 
                        defaultValue={resumeInfo?.phone}
                        onChange={handleInputChange}  />
                    </div>
                    <div>
                        <label className='text-sm'>Email</label>
                        <Input name="email" required 
                        defaultValue={resumeInfo?.email}
                        onChange={handleInputChange}  />
                    </div>
                </div>
                <div className='mt-3 flex justify-end'>
                <Button type="submit"
                disabled={loading}>
                    {loading?<LoaderCircle className='animate-spin' />:'Save'}
                    </Button>
                </div>
            </form>
        </div>
      )
    }
    
    export default PersonalDetail