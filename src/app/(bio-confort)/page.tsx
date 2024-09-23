import { Navbar, SideBar, SubNavbar, Title, Video } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">

      {/* Contenedor principal para el Navbar, SubNavbar y Title */}
      <div className="flex flex-col justify-center items-center px-4 md:px-8">
        <SubNavbar />
        <Navbar />
        <Title />
      </div>

      {/* Contenedor del Video */}
      <div className="flex justify-center w-full px-4 md:px-8">
        <Video />
      </div>

      {/* Sidebar fijo que solo se muestra en pantallas medianas o grandes 
      <div className="fixed lg:top-40 right-0 hidden lg:block">
        <SideBar />
      </div>
      
      */}
      

      {/* Footer */}
      <div className="bg-[#658C6F] w-full flex justify-center py-2 md:py-4">
        <span className="text-xs font-light text-gray-100 md:text-sm">© 2024 zenittApp All rights reserved.</span>
      </div>
      
    </div>
  );
}
