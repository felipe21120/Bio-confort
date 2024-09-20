import { poppins} from '@/config/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className={`${poppins.className} antialiased bg-[#658C6F] h-96 mt-20`}>
            <div className='grid grid-cols-4 gap-4 text-white py-10 px-40 justify-items-center'>
                <Image
                    src="/Logo bioconfort.jpg"
                    alt='Hola'
                    width={200}
                    height={200}
                    className='rounded-2xl'
                />
                <div className='font-light'>
                    <h3 className='mb-6 font-semibold text-lg'>Opciones</h3>
                    <ul className='flex flex-col gap-4 list-disc'>
                        <Link href="/">
                            <li>Inicio</li>
                        </Link>
                        <Link href="/quienes-somos">
                            <li>Quienes somos</li>
                        </Link>
                        <Link href="/productos">
                            <li>Productos</li>
                        </Link>
                    </ul>
                </div>
                <div className='font-light'>
                    <h3 className='mb-6 font-semibold text-lg'>Redes sociales</h3>
                    <ul className='flex flex-col gap-4 list-disc'>
                        <a
                            href="https://www.facebook.com/profile.php?id=61566305936994&sk=about"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <li>Facebook</li>
                        </a>

                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className='font-light'>
                    <h3 className='mb-10 font-semibold text-lg'>Dirección</h3>
                    <p className=''>Calle sierra de la Grazalema #44 provincia almeria localidad viator</p>
                </div>
            </div>

            <div className='grid grid-cols-3 justify-items-center text-white mt-10 px-14'>
                <div className=''>bioconfort231@gmail.com</div>
                <div className='flex gap-4 font-light'>
                    <div className=''>+34 614336682</div>
                    <div className=''>+34 950675447</div>
                </div>

                <div className='text-xs font-extralight'>© 2024 zenittApp All rights reserved.</div>
            </div>

        </footer>
    )
}
