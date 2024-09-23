import { montserrat } from '@/config/fonts';
import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const SubNavbar = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-20 px-4 lg:px-20">
      <Image
        src="/Logo bioconfort.jpg"
        alt="Logo Bio-confort"
        width={80}
        height={80}
        className="w-20 h-20 lg:w-24 lg:h-24"
      />

      {/* Título */}
      <h3 className={`${montserrat.className} antialiased text-lg lg:text-xl font-bold text-center mt-2 lg:mt-4`}>
        Biocombustibles 
        <span className="text-[#9EAD39] block lg:inline-block pl-0 lg:pl-2">Bio-confort</span>
      </h3>

      {/* Redes Sociales */}
      <div className="pt-4 lg:pt-0">
  <h3 className="text-center mb-2 font-bold text-base lg:text-lg">Síguenos</h3>
  <div className="flex justify-center gap-2 lg:gap-4">
    <a
      href="https://www.facebook.com/profile.php?id=61566305936994&sk=about"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
    >
      <div className="bg-[#EE9210] rounded-full w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center">
        <FaFacebook className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
      </div>
    </a>

    <a
      href="https://www.instagram.com/bioconfort231/?utm_source=ig_web_button_share_sheet"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
    >
      <div className="bg-[#EE9210] rounded-full w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center">
        <FaInstagram className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
      </div>
    </a>

    <a
      href="https://wa.me/+34614336682" // Cambia '1234567890' por tu número de teléfono con el código de país
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
    >
      <div className="bg-[#EE9210] rounded-full w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center">
        <FaWhatsapp className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
      </div>
    </a>
  </div>
</div>

    </div>
  );
};


