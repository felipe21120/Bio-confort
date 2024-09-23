import { poppins } from '@/config/fonts';
import React from 'react';

export const SideBar = () => {
  return (
    <div className={`${poppins.className} antialiased bg-[#658C6F] w-64 sm:w-72 lg:w-80 text-white font-extralight rounded-l-3xl`}>
      {/* Sección de redes sociales */}
      <div className='flex flex-col p-6 sm:p-10'>
        <h2 className='font-light text-center mb-2 text-sm sm:text-base'>Redes sociales</h2>
        <a
          href="https://www.facebook.com/profile.php?id=61566305936994&sk=about"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <p className='mt-2 text-xs sm:text-sm'>Facebook</p>
        </a>

        <a
          href="https://www.instagram.com/bioconfort231/?utm_source=ig_web_button_share_sheet"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <p className='mt-2 text-xs sm:text-sm'>Instagram</p>
        </a>
      </div>

      {/* Sección de dirección */}
      <div className='flex flex-col p-6 sm:p-10 gap-3'>
        <h2 className='font-light text-center text-sm sm:text-base'>Dirección</h2>
        <p className='text-xs sm:text-sm'>
          Calle Sierra de la Grazalema #44, Provincia Almería, Localidad Viator
        </p>
      </div>

      {/* Sección de números de teléfono */}
      <div className='flex flex-col p-6 sm:p-10 pb-20'>
        <h2 className='font-normal text-xs sm:text-sm'>+34 614336682</h2>
        <h2 className='font-light pt-4 text-xs sm:text-sm'>+34 614336682</h2>
      </div>
    </div>
  );
};
