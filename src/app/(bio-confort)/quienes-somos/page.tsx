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
      <div className="flex-1 w-full px-4 lg:px-8">
        <CompanyContent />
      </div>

      {/* Scroll con WhatsApp */}
      <ScrollWithWhatsApp
        className="custom-class fixed bottom-4 right-4 lg:bottom-8 lg:right-8"
        phoneNumber="573007277299"
        message="Hola, como estas"
      />
      
    </div>
  );
}
