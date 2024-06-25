import { Loader2, PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {v4 as uuidv4} from 'uuid'
import { useUser } from '@clerk/clerk-react'
import useUserResume from '@/hooks/useUserResume'
  

const AddResume = () => {

    const [openDialog,setOpenDialog]=useState(false)
    const [resumeTitle,setResumeTitle]=useState('')
    const {addResume,loading,getAllResume}=useUserResume()
    const {user}=useUser()

    const onCreate=()=>{
        const uuid=uuidv4()
        const obj={
            title:resumeTitle,
            uuid:uuid,
            email:user?.primaryEmailAddress?.emailAddress,
            fullName:user?.fullName
        }
        addResume(obj)
    }

    const allUsers=async()=>{
        const users=await getAllResume()
        console.table(users)
    }

  return (
    <div>
      <Button onClick={()=>allUsers()}>
      
      All users</Button>
        <div className='p-14 py-24 border flex items-center justify-center bg-secondary rounded-lg h-[250px] hover:scale-105 hover:transition-all hover:shadow-md cursor-pointer border-dashed'
        onClick={()=>setOpenDialog(true)}
        >
            <PlusSquare className='text-3xl'/>
        </div>

        <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader >
    <DialogTitle>Create a new resume</DialogTitle>
      <DialogDescription>
        <p>Add a title for your new resume</p>
        <Input className='my-2' placeholder='Ex. Full Stack Resume' 
            value={resumeTitle}
            onChange={(e)=>setResumeTitle(e.target.value)}
        />
      </DialogDescription>
      <div className='flex justify-end gap-5'>
        <Button variant='ghost' onClick={()=>setOpenDialog(false)}>Cancel</Button>
        <Button onClick={()=>onCreate()} disabled={!resumeTitle} >
          {
            loading ? <Loader2 className='animate-spin' />:'Create'
          }
         
          
          
          </Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddResume