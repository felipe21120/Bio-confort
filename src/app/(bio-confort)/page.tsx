import { Navbar, SideBar, SubNavbar, Title, Video } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">

      <div className="flex flex-col justify-center items-center">
        <SubNavbar />
        <Navbar />
        <Title />
      </div>

        <div className="flex justify-center">
          <Video />
        </div>
        <div className="fixed top-60 right-0">
          <SideBar />
        </div>

      <div className="bg-[#658C6F] w-full flex justify-center">
        <span className="text-xs font-light text-gray-100">© 2024 zenittApp All rights reserved.</span>
      </div>

    </div>
  );
}
