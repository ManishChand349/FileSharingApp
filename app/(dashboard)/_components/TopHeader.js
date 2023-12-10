import { AlignCenter } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
function TopHeader() {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>

    <AlignCenter className='md:hidden'/>
    <Image src='/logo.svg' width={150} height={100} className='md:hidden' />
    <UserButton/>
    </div>
  )
}

export default TopHeader