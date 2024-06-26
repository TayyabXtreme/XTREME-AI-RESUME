import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react'
import ReachTextEditor from '../ReachTextEditor';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';

const formField={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startDate:'',
    endDate:'',
    workSummery:'',

}

const Experience = () => {
    const [experinceList,setExperinceList]=useState([formField]);


    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

    const handleChange=(index,event)=>{
        const newEntries=experinceList.slice();
        const {name,value}=event.target;
        newEntries[index][name]=value;
        setExperinceList(newEntries)
    }

    const AddNewExperience=()=>{
        setExperinceList([...experinceList,formField])
    }


    const RemoveExperience=()=>{
        if(experinceList.length!==1){
        setExperinceList(experinceList.slice(0,-1))
        }
    }

    const handleRichTextEditor=(event,field,index)=>{
        const newEntries=experinceList.slice();
        newEntries[index][field]=event.target.value;
        setExperinceList(newEntries)
    }

    useEffect(()=>{
       setResumeInfo({
        ...resumeInfo, 
        experience:experinceList
       })

    },[experinceList])


  return (
    <div>
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
    <h2 className='font-bold text-lg'>Professional Experience</h2>
                <p>Add Your previous Job experience</p>
            <div>
                {
                    experinceList.map((item,index)=>(
                        <div>
                            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                                <div>
                                    <label className='text-xs'>Position Title</label>
                                    <Input name='title' onChange={(event)=>handleChange(index,event)} />
                                </div>
                                <div>
                                    <label className='text-xs'>Company Name</label>
                                    <Input name='companyName' onChange={(event)=>handleChange(index,event)} />
                                </div>
                                <div>
                                    <label className='text-xs'>City</label>
                                    <Input name='city' onChange={(event)=>handleChange(index,event)} />
                                </div>
                                <div>
                                    <label className='text-xs'>State</label>
                                    <Input name='state' onChange={(event)=>handleChange(index,event)} />
                                </div>
                                <div>
                                    <label className='text-xs'>Start Date</label>
                                    <Input type="date"  
                                            name="startDate" onChange={(event)=>handleChange(index,event)} />
                                </div>
                                <div>
                                    <label className='text-xs'>End Date</label>
                                    <Input type="date" name="endDate" onChange={(event)=>handleChange(index,event)} />
                                </div>
                                <div className='col-span-2'>
                                    <ReachTextEditor
                                     onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummery',index)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>

                <Button onClick={AddNewExperience} variant='outline' className='text-primary'>+ Add More Experience</Button> 
                <Button onClick={RemoveExperience} variant='outline' className='text-primary'> - Remove</Button> 
                </div>
                <Button >Save</Button> 
            </div>
        </div>
    </div>
  )
}

export default Experience