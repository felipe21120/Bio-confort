'use client'

import React, { useState } from 'react';
import { Carrousel } from "@/components";
import Image from "next/image";
import { poppins } from '@/config/fonts';

// Define una interfaz para los productos
interface Product {
  title: string;
  subtitle: string;
  ofrecer: string;
  description: string;
  imageSrc: string;
  benefits: string[]; 
  features: string[]; 
  finish: string;
}

// Modal Component con Tipado
interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  product: Product | null;
}

const TailwindModal: React.FC<ModalProps> = ({ isOpen, closeModal, product }) => {
  if (!isOpen || !product) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick} // Detectar clic en el overlay
    >
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-4 md:p-6 relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image 
              src={product.imageSrc}
              alt={product.title}
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-sm mt-6 md:mt-0">
            <h2 className="text-xl font-bold mb-4 text-center md:text-left">{product.title}</h2>
            <h3 className="font-bold mb-2 text-base">{product.subtitle}</h3>
            <p className="mb-4">{product.ofrecer}</p>
            <p>{product.description}</p>

            <h4 className="font-semibold mt-4 text-base">Características</h4>
            <ul className="list-decimal ml-4">
              {product.features.map((feature, index) => (
                <li key={index} className="pt-2">{feature}</li>
              ))}
            </ul>

            <h4 className="font-semibold mt-4 text-base">Beneficios</h4>
            <ul className="list-decimal ml-4">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="pt-2">{benefit}</li>
              ))}
            </ul>

            <p className="mt-4">{product.finish}</p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={closeModal}
            className="mt-4 bg-[#EE9210] text-white px-6 py-2 rounded-full"
          >
            Cerrar Modal
          </button>
        </div>

        {/* Botón de cierre en la esquina superior derecha */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export const ContentProducts: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const products: Product[] = [
    {
      title: 'Madera',
      subtitle: 'Ofrecemos Madera para Biocombustibles de Alta Calidad',
      ofrecer: 'En nuestra empresa de biocombustibles, nos enorgullece ofrecer recursos naturales, incluyendo madera de la más alta calidad, ideal para la producción de biocombustibles...',
      description: 'La madera es esencial en la producción de biocombustibles...',
      imageSrc: '/madera-4.png',
      benefits: ['Sostenibilidad...', 'Reducción de Emisiones...', 'Impulso Económico...'],
      features: ['Pellets de Madera...', 'Bioetanol...', 'Gasificación...'],
      finish: 'La madera es clave en la transición hacia energías más limpias...'
    },
    // Otros productos...
  ];

  return (
    <>
      <div className="mt-10">
        <Carrousel />
      </div>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-[#F4F4F4] w-72 md:w-80 rounded-2xl p-4 flex flex-col">
              <Image
                src={product.imageSrc}
                alt={product.title}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h1 className={`${poppins.className} antialiased text-center mt-4 font-bold`}>{product.title}</h1>
              <p className="text-sm font-light py-4 px-2">{product.description}</p>
              <div className="flex justify-center mt-2">
                <button
                  className="bg-[#EE9210] px-8 py-2 text-white rounded-full"
                  onClick={() => openModal(product)} 
                >
                  Saber más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <TailwindModal isOpen={isOpen} closeModal={closeModal} product={selectedProduct} />
    </>
  );
};
