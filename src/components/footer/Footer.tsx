import { poppins } from '@/config/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
    return (
        <footer className={`${poppins.className} antialiased bg-[#658C6F] h-auto lg:h-96 mt-20`}>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 text-white py-10 px-10 lg:px-40 justify-items-center'>
                
                {/* Logo */}
                <div className='flex justify-center'>
                    <Image
                        src="/Logo bioconfort.jpg"
                        alt='Logo Bioconfort'
                        width={200}
                        height={200}
                        className='rounded-2xl'
                    />
                </div>

                {/* Opciones */}
                <div className='font-light'>
                    <h3 className='mb-6 font-semibold text-lg'>Opciones</h3>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/quienes-somos">¿Quiénes somos?</Link>
                        </li>
                        <li>
                            <Link href="/productos">Productos</Link>
                        </li>
                    </ul>
                </div>

                {/* Redes sociales */}
                <div className='font-light'>
                    <h3 className='mb-6 font-semibold text-lg'>Redes sociales</h3>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <a
                                href="https://www.facebook.com/profile.php?id=61566305936994&sk=about"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/bioconfort231/?utm_source=ig_web_button_share_sheet"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                Instagram
                            </a>
                        </li>
                       
                    </ul>
                </div>

                {/* Dirección */}
                <div className='font-light text-center lg:text-left'>
                    <h3 className='mb-6 font-semibold text-lg'>Dirección</h3>
                    <p>Calle Sierra de la Grazalema #44, Provincia Almería, Localidad Viator</p>
                </div>
            </div>

            {/* Contacto y Derechos */}
            <div className='grid grid-cols-1 lg:grid-cols-3 text-center lg:text-left justify-items-center text-white mt-10 gap-4 px-10 lg:px-14'>
                <div className='text-sm'>bioconfort231@gmail.com</div>
                <div className='flex gap-4 font-light'>
                    <div>+34 614336682</div>
                    <div>+34 950675447</div>
                </div>
                <div className='text-xs font-extralight'>© 2024 zenittApp. All rights reserved.</div>
            </div>
        </footer>
    );
};
