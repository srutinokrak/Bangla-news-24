import Image from "next/image";
import Navlinks from "./Navlinks";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <>
      <header className="mx-auto w-full max-w-7xl px-4 py-4">
        {/* Logo + Sign In/Sign Up */}
        <div className="relative flex justify-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.webp"
              alt="Bangla News 24"
              width={40}
              height={40}
              priority
            />

            <div>
              <h1 className="text-2xl font-bold text-red-700">
                Bangla News 24
              </h1>

              <p className="text-xs text-neutral-500">{date}</p>
            </div>
          </div>

         </div>

         <UserInfo/>
      
        {/* Navigation comes from Navlinks */}
       
          <Navlinks />
      
      </header>

    
    </>
  );
};

export default Header;