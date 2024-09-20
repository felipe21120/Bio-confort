import { poppins } from '@/config/fonts'
import React from 'react'

export const SideBar = () => {
  return (
    <div className={`${poppins.className} antialiased bg-[#658C6F] w-72 text-white font-extralight rounded-l-3xl `}>
      <div className='flex flex-col p-10 '>
        <h2 className='font-light text-center mb-2'>Redes sociales</h2>
        <a
          href="https://www.facebook.com/profile.php?id=61566305936994&sk=about"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <p className='mt-2'>Facebook</p>
        </a>

        <p className='mt-3'>Instagram</p>
        <p className='mt-3'>Whatsapp</p>
      </div>

      <div className='flex flex-col p-10 gap-3'>
        <h2 className='font-light text-center'>Dirección</h2>
        <p>Calle sierra de la Grazalema #44 provincia almeria localidad viator</p>

      </div>

      <div className='flex flex-col p-10 pb-20'>
        <h2 className='font-normal'>+34 614336682</h2>
        <h2 className='font-light pt-4'>+34 614336682</h2>

      </div>



    </div>
  )
}
