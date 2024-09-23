import { Footer, Navbar, SubNavbar } from "@/components";
import { poppins } from "@/config/fonts";



export default function Contacto() {
  return (
    <div>
        
      <div className="flex flex-col justify-center items-center">
        <SubNavbar />
        <Navbar />

        <h1 className={`${poppins.className} antialiased bg-[#EE9210] mt-10 px-8 py-2 rounded-full text-white`} >Contáctanos</h1>

    </div>


      <Footer />


    </div>
  );
}
