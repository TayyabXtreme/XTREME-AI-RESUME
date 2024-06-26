import { Button } from '@/components/ui/button'
import { Brain } from 'lucide-react'
import React, { useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'

const ReachTextEditor = ({onRichTextEditorChange}) => {
  const [value, setValue] = useState('')
  return (

    <div>

      <div className='flex justify-between my-2'>
        <label className='text-xs'>Summery</label>
        <Button className='flex gap-2 text-primary border-purple-600 text-purple-700' variant='outline' size='sm' ><Brain className='h-4 w-4' />Generate from AI </Button>
      </div>

    <EditorProvider> 

      <Editor value={value} onChange={ (e)=>{
        setValue(e.target.value)
        onRichTextEditorChange(e)
      }}>
        <Toolbar>
        <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
          <BtnLink />

        </Toolbar>
      </Editor>  

    </EditorProvider>
    </div>
  )
}

export default ReachTextEditor