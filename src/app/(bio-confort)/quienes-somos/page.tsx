import { Navbar, SubNavbar } from "@/components";
import { CompanyContent } from "./ui/CompanyContent";
import { ScrollWithWhatsApp } from "@/components/scroll/Scroll";


export default function QuienesSomos() {
  return (
    <div>
      

      <div className="flex flex-col justify-center items-center">
        <SubNavbar />
        <Navbar />
      </div>

      <CompanyContent />
      

      <ScrollWithWhatsApp
        className="custom-class"
        phoneNumber="573007277299"
        message="Hola, como estas"
      />


    </div>
  );
}
