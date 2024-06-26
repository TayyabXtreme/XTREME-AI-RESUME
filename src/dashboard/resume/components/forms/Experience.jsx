import { Input } from '@/components/ui/input';
import React, { useState } from 'react'

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

    const handleChange=(index,event)=>{
        
    }


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
                                    <label className='text-xs'>Position Title</label>
                                    <Input name='title' onChange={(event)=>handleChange(index,event)} />
                                </div>
                                <div>
                                    <label className='text-xs'>Position Title</label>
                                    <Input name='title' onChange={(event)=>handleChange(index,event)} />
                                </div>
                                <div>
                                    <label className='text-xs'>Position Title</label>
                                    <Input name='title' onChange={(event)=>handleChange(index,event)} />
                                </div>
                                <div>
                                    <label className='text-xs'>Position Title</label>
                                    <Input name='title' onChange={(event)=>handleChange(index,event)} />
                                </div>
                                <div>
                                    <label className='text-xs'>Position Title</label>
                                    <Input name='title' onChange={(event)=>handleChange(index,event)} />
                                </div>
                                <div>
                                    <label className='text-xs'>Position Title</label>
                                    <Input name='title' onChange={(event)=>handleChange(index,event)} />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Experience