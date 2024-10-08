import { Navbar, SubNavbar } from "@/components";
import { ContentProducts } from "./ui/ContentProducts";
import { poppins } from "@/config/fonts";
import { ScrollWithWhatsApp } from "@/components/scroll/Scroll";

export default function Productos() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-4 lg:px-0">
        <SubNavbar />
        <Navbar />

        <h1
          className={`${poppins.className} antialiased bg-[#EE9210] mt-10 px-8 py-2 rounded-full text-white text-center text-lg sm:text-xl`}
        >
          Nuestros productos
        </h1>

        <p className="mt-6 font-light text-center text-sm sm:text-base lg:max-w-3xl">
          Ofrecemos productos de{" "}
          <span className="text-[#EE9210] font-semibold">alta calidad</span>, 
          incluyendo combustibles elaborados a base de{" "}
          <span className="text-[#EE9210] font-semibold">carbón y madera</span>, 
          así como recursos naturales para distribución a terceros, como madera, 
          carbón natural y pallets.
        </p>
      </div>

      <ContentProducts />

      <ScrollWithWhatsApp
        className="custom-class"
        phoneNumber="34614336682"
        message="Hola, Me interesa conocer mas sobre los productos"
      />
    </div>
  );
}
