import { poppins } from "@/config/fonts";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

export const CompanyContent = () => {
  return (
    <div className="mt-10">
      
      {/* Frase inicial */}
      <div className="h-20 flex items-center justify-center text-center">
        <h3 className="text-gray-700 font-semibold">
          “Transforma el futuro con cada <span className="text-[#658C6F]">chispa de energía:</span> 
          elige recursos naturales sostenibles para biocombustibles, <span className="text-[#658C6F]">elige Bio-Confort.</span>”
        </h3>
      </div>
      
      {/* Sección ¿Qué Hacemos? */}
      <div className="bg-gray-50 flex flex-col lg:flex-row items-center justify-center py-10 gap-6">
        <div className="lg:w-1/2 w-full flex flex-col pt-6 px-4 lg:px-40">
          <h4 className="font-light text-[#658C6F] text-xs mb-2">Bioconfort un lugar seguro</h4>
          <h3 className={`${poppins.className} antialiased font-bold text-lg text-[#658C6F]`}>¿Qué Hacemos?</h3>
          <p className="pt-4 font-light text-sm text-justify">
            Nos especializamos en la venta al por mayor de recursos naturales de <span className="text-[#658C6F] font-semibold">alta calidad</span>, como madera y carbón, para la producción de biocombustibles. Nuestro <span className="text-[#658C6F] font-semibold">objetivo es optimizar</span> estos materiales, garantizando un rendimiento superior y un menor impacto ambiental. Suministramos materias primas para diversas aplicaciones, promoviendo la eficiencia y sostenibilidad. Además, buscamos constantemente nuevas fuentes y tecnologías para ampliar nuestra oferta y mejorar nuestro <span className="text-[#658C6F] font-semibold">impacto ecológico.</span>
          </p>
          <div className="flex justify-center pt-3">
            <div className="border border-[#EE9210] mt-4 px-4 py-2 text-sm rounded-lg text-white bg-[#EE9210]">Bio-confort</div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <Image
            src="/Carbon-quienes.png"
            alt="Imagen de carbón"
            width={602}
            height={363}
            className="rounded-lg"
          />
        </div>
      </div>
      
      {/* Sección Misión y Visión */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:px-40 gap-10 mt-10">
        <div className="lg:w-1/2 w-full flex flex-col justify-center px-4 lg:px-10">
          <div className="flex items-center">
            <h2 className={`${poppins.className} antialiased text-lg font-bold py-4 pr-4 text-[#EE9210]`}>Misión</h2>
            <FaEye />
          </div>
          <p className="text-sm font-light text-justify">
            En Bio-Confort, nos dedicamos a proporcionar recursos naturales de alta calidad, como madera y carbón, para la producción de biocombustibles. Nuestro objetivo es ofrecer alternativas energéticas eficientes y respetuosas con el medio ambiente. Nos comprometemos a innovar continuamente en la selección de materias primas y en nuestras operaciones para maximizar el rendimiento energético y reducir nuestra huella ecológica.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col px-4 lg:px-10">
          <div className="flex items-center">
            <h2 className={`${poppins.className} antialiased text-lg font-bold py-4 pr-4 text-[#658C6F]`}>Visión</h2>
            <FaEye />
          </div>
          <p className="text-sm font-light text-justify">
            Ser líderes en la provisión de recursos naturales para la producción de biocombustibles sostenibles, contribuyendo a un futuro más verde y limpio mediante soluciones innovadoras que optimicen el uso de estos materiales y promuevan el desarrollo sustentable.
          </p>
        </div>
      </div>

      {/* Sección Valores */}
      <div className="bg-gray-50 flex flex-col lg:flex-row items-center justify-center mt-14 lg:px-40 gap-6">
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <Image
            src="/bosques-quienes.png"
            alt="Imagen de bosques"
            width={602}
            height={363}
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col px-4 lg:px-10">
          <h3 className={`${poppins.className} antialiased font-bold text-lg text-[#658C6F]`}>Valores</h3>
          <ul className="mt-5 list-disc font-light text-sm px-2">
            <li><span className="text-[#658C6F] font-semibold">Sostenibilidad:</span> Comprometidos con prácticas que protejan el medio ambiente y promuevan el uso responsable de los recursos naturales.</li>
            <li><span className="text-[#658C6F] font-semibold">Innovación:</span> Buscamos constantemente nuevas tecnologías y métodos para mejorar la eficiencia y la calidad de nuestros biocombustibles.</li>
            <li><span className="text-[#658C6F] font-semibold">Calidad:</span> Nos aseguramos de que nuestros productos cumplan con los más altos estándares de rendimiento y seguridad.</li>
            <li><span className="text-[#658C6F] font-semibold">Responsabilidad:</span> Trabajamos con integridad y transparencia en todas nuestras operaciones, priorizando el bienestar de nuestras comunidades y el entorno.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};
