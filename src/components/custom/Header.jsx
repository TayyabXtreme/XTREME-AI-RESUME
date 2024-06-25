import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const Header = () => {
    const {user,isSignedIn}=useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-sm shadow-white'>
        <img src='./logo.svg' width={50} height={50}/>


        {
            isSignedIn?(
            <div className='flex gap-2 items-center'>
                <Link to={'/dashboard'}>
                <Button variant='outline' className='bg-white text-black'> Dashboard</Button>
                </Link>
                <UserButton/>
            </div>

            ):(
                <Link to={'/auth/sign-in'}>
                <Button className='bg-white text-black'>Get Started</Button>
                </Link>

            )


        }

       
    </div>
  )
}

export default Header