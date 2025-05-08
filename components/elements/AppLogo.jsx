import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AppLogo = () => {
  return (
    <Link href={"/"} className='flex items-center'>
      <Image src={"/images/logo.Jpg"} width={40} height={40} />
      <div className='ml-3'>
        <h1 className='font-semibold text-primary '>PKB</h1>
        <p>Pontianak</p>
      </div>
    </Link>
  )
}

export default AppLogo
