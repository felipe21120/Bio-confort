'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Usa usePathname para obtener la ruta actual
import React from 'react';

export const Navbar = () => {
  const pathname = usePathname(); // Hook de Next.js 14 para obtener la ruta actual

  // Función que retorna si la ruta actual es igual a la pasada como argumento
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="mt-4 bg-white py-3 shadow-2xl rounded-full px-14">
      <div className="flex gap-12 justify-center items-center">
        <Link href="/">
          <div className={`px-4 py-1 rounded-full cursor-pointer ${isActive('/') ? 'bg-[#EE9210] text-white' : ''}`}>
            Inicio
          </div>
        </Link>

        <Link href="/quienes-somos">
          <div className={`px-4 py-1 rounded-full cursor-pointer ${isActive('/quienes-somos') ? 'bg-[#EE9210] text-white' : ''}`}>
            ¿Quiénes somos?
          </div>
        </Link>

        <Link href="/productos">
          <div className={`px-4 py-1 rounded-full cursor-pointer ${isActive('/productos') ? 'bg-[#EE9210] text-white' : ''}`}>
            Productos
          </div>
        </Link>

        <Link href="/contacto">
          <div className={`px-4 py-1 rounded-full cursor-pointer ${isActive('/contacto') ? 'bg-[#EE9210] text-white' : ''}`}>
            Contacto
          </div>
        </Link>
      </div>
    </nav>
  );
};
