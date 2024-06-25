import { Loader2, PlusSquare } from 'lucide-react'
import React, { useEffect, useState } from 'react'
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
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from '@/components/ui/toaster'

  

const AddResume = () => {


    

    const [openDialog,setOpenDialog]=useState(false)
    const [resumeTitle,setResumeTitle]=useState('')
    const {addResume,loading,result}=useUserResume()
    const {user}=useUser()
    const { toast } = useToast()

    const onCreate=()=>{
        const uuid=uuidv4()
        const obj={
            title:resumeTitle,
            uuid:uuid,
            email:user?.primaryEmailAddress?.emailAddress,
            fullName:user?.fullName
        }
        addResume(obj)

          if(result){
            toast({
                title:'Resume created successfully',
            })
            setOpenDialog(false)
          }
    }

      

    


    


  return (
    <div>
       <Toaster className={'bg-red'} />
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