import { montserrat} from '@/config/fonts'
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'



export const SubNavbar = () => {
  return (
    <div className='flex justify-between gap-80 '>
      <Image
        src="/Logo bioconfort.jpg"
        alt='Hola'
        width={100}
        height={100}
        className=''
      />



      <h3 className={`${montserrat.className} antialiased text-xl font-bold text-center mt-4`}>Biocombustibles <span className='text-[#9EAD39] block pl-8 '>Bio-confort</span></h3>


      <div className='pt-4'>
        <h3 className='text-center mb-2 font-bold text-lg'>Siguenos</h3>
        <div className='flex gap-2'>
          <a
            href="https://www.facebook.com/profile.php?id=61566305936994&sk=about"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
             <div className='bg-[#EE9210] rounded-full w-10 h-10 flex justify-center items-center'>
              <FaFacebook className='w-6 h-6 text-white' />
            </div>
          </a>
         
          <div className='bg-[#EE9210] rounded-full w-10 h-10 flex justify-center items-center'>
            <FaInstagram className='w-6 h-6 text-white' />
          </div>
          <div className='bg-[#EE9210] rounded-full w-10 h-10 flex justify-center items-center'>
            <FaWhatsapp className='w-6 h-6 text-white' />
          </div>
        </div>

      </div>


    </div>
  )
}
