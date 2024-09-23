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
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 p-6 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col lg:flex-row items-center lg:justify-center">
          <div className="lg:w-1/2 w-full flex justify-center items-center mb-4 lg:mb-0">
            <Image 
              src={product.imageSrc}
              alt='Producto'
              width={600}
              height={400}
              className="rounded-lg w-full lg:w-auto"
            />
          </div>
          <div className="lg:w-1/2 w-full text-sm px-4">
            <h2 className="text-xl font-bold mb-4 text-center lg:text-left">{product.title}</h2>
            <h3 className="font-bold mb-2 text-base">{product.subtitle}</h3>
            <p className="mb-4">{product.ofrecer}</p>
            <p>{product.description}</p>

            <h4 className="font-semibold mt-4 text-base">Características</h4>
            <ul className="list-disc ml-4">
              {product.features.map((feature, index) => (
                <li key={index} className="pt-2">{feature}</li>
              ))}
            </ul>

            <h4 className="font-semibold mt-4 text-base">Beneficios</h4>
            <ul className="list-disc ml-4">
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
            className="bg-[#EE9210] text-white px-6 py-2 rounded-full"
          >
            Cerrar Modal
          </button>
        </div>

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
      ofrecer: 'En nuestra empresa de biocombustibles, nos enorgullece ofrecer recursos naturales, incluyendo madera de la más alta calidad, ideal para la producción de biocombustibles. Si buscas una solución sostenible y eficiente, nuestra madera es perfecta para tus necesidades.',
      description: 'La madera es esencial en la producción de biocombustibles, utilizados como fuentes de energía renovables. Se utiliza principalmente para:',
      imageSrc: '/madera-4.png',
      benefits: [
        'Sostenibilidad: Recurso renovable que reduce la dependencia de combustibles fósiles.',
        'Reducción de Emisiones: Menos dióxido de carbono en comparación con combustibles fósiles.',
        'Impulso Económico: Generación de empleo en el sector forestal y de energía renovable.',
      ],
      features: [
        'Pellets de Madera: Compactos y fáciles de manejar, ideales para calefacción y generación de electricidad.',
        'Bioetanol: Derivado de la fermentación de madera, es un sustituto ecológico de la gasolina.',
        'Gasificación: Convierte la madera en gas de síntesis, que puede generar electricidad o producir otros combustibles.',
      ],
      finish: 'La madera es clave en la transición hacia energías más limpias. ¡Contáctanos para obtener más información sobre nuestros productos y cómo podemos ayudarte!'
    },
    {
      title: 'Carbon',
      subtitle: 'Ofrecemos Carbón para Biocombustibles de Alta Calidad',
      ofrecer: 'En nuestra empresa de biocombustibles, ofrecemos carbón de alta calidad, ideal para la producción de biocombustibles y otras aplicaciones energéticas. Si buscas una opción eficiente y sostenible, nuestro carbón es la solución que necesitas.',
      description: 'El carbón es un recurso clave en la generación de biocombustibles sólidos y energía. Sus principales usos incluyen:',
      imageSrc: '/carbon-2.png',
      benefits: [
        'Carbón Vegetal: Producto de la carbonización de madera y biomasa, utilizado como fuente de energía limpia en industrias, calefacción y generación eléctrica.',

        'Producción de Biochar: Un subproducto del carbón que mejora la calidad del suelo y captura carbono, ayudando a mitigar el cambio climático',

        'Gasificación del Carbón: El carbón se convierte en gas de síntesis, que puede ser utilizado para generar electricidad o producir otros combustibles.'
      ],
      features: [
        'Sostenibilidad: Recurso natural que, cuando se gestiona adecuadamente, ayuda a reducir la dependencia de combustibles fósiles.',
        'Reducción de Emisiones: El uso de carbón en biocombustibles puede emitir menos gases contaminantes que los combustibles tradicionales.',
        'Valor Económico: Fomenta el crecimiento en el sector energético y agrícola, generando empleo y promoviendo prácticas sostenibles.'
      ],
      finish: 'El carbón juega un papel crucial en la transición hacia fuentes de energía más limpias y eficientes. ¡Contáctanos para más información sobre cómo nuestro carbón puede ayudarte a cumplir tus objetivos energéticos!'
    },
    {
      title: 'Pallets',
      subtitle: 'Ofrecemos Pellets de Madera para Biocombustibles de Alta Calidad',
      ofrecer: 'En nuestra empresa de biocombustibles, proporcionamos pellets de madera de alta calidad, ideales para calefacción y generación de energía limpia. Si buscas una alternativa eficiente y sostenible a los combustibles fósiles, nuestros pellets son la solución perfecta.',
      description: 'Los pellets de madera son una fuente de energía compacta y altamente eficiente. Se fabrican a partir de residuos de madera comprimidos y ofrecen varias ventajas:',
      imageSrc: '/pellets-4.png',
      benefits: [
        'Calefacción y Energía: Los pellets se utilizan en estufas y calderas para calefacción, así como en plantas de energía para la generación de electricidad, ofreciendo una opción sostenible y limpia.',

        'Eficiencia Energética: Gracias a su alta densidad energética y bajo contenido de humedad, los pellets ofrecen una combustión eficiente con menos residuos y emisiones.',

        'Fácil Almacenamiento y Transporte: Su tamaño compacto facilita su manejo y almacenamiento, siendo una opción conveniente tanto para hogares como para empresas.'
      ],
      features: [
        'Sostenibilidad: Fabricados a partir de biomasa renovable, los pellets ayudan a reducir la dependencia de los combustibles fósiles.',
        'Reducción de Emisiones: Comparados con otros combustibles, los pellets emiten menos dióxido de carbono y contaminantes durante la combustión.',
        'Eficiencia Económica: Son una opción rentable a largo plazo, al mismo tiempo que fomentan el crecimiento en el sector de energías renovables.'
      ],
      finish: 'Los pellets de madera son una excelente opción para quienes buscan una solución energética ecológica y eficiente. ¡Contáctanos para obtener más información sobre nuestros pellets y cómo pueden beneficiarte!'
    },
    
  ];


  return (
    <>
      <div className="mt-10">
        <Carrousel />
      </div>

      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-[#F4F4F4] w-80 rounded-2xl p-4 flex flex-col my-3">
              <Image
                src={product.imageSrc}
                alt={product.title}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <h1 className={`${poppins.className} antialiased text-center mt-4 font-bold`}>{product.title}</h1>
              <p className="text-sm font-light py-4 px-4">{product.description}</p>
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
