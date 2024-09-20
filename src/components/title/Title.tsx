import { titleFont } from '@/config/fonts'
import React from 'react'

export const Title = () => {
  return (
    <div className='mt-10'>
        <h1 className={`${titleFont.className} antialiased text-3xl font-bold text-center `}>Bio-Confort</h1>
        <h3 className='font-light text-center mt-3'>Biocombustibles naturales, confort <span className='text-[#EE9210] font-semibold'>ecológico</span></h3>
    </div>
  )
}
