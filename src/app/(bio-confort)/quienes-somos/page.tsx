import { Navbar, SubNavbar } from "@/components";
import { CompanyContent } from "./ui/CompanyContent";
import { ScrollWithWhatsApp } from "@/components/scroll/Scroll";

export default function QuienesSomos() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* SubNavbar y Navbar */}
      <div className="flex flex-col justify-center items-center px-4 lg:px-8">
        <SubNavbar />
        <Navbar />
      </div>

      {/* Contenido de la Compañía */}
      <div className="flex-1 w-full ">
        <CompanyContent />
      </div>

      {/* Scroll con WhatsApp */}
      <ScrollWithWhatsApp
         className="custom-class"
         phoneNumber="34614336682"
         message="Hola, Me interesa conocer mas sobre los productos"
      />
      
    </div>
  );
}
