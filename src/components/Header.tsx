import Image from "next/image";
import Navlinks from "./Navlinks";

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

          {/* Sign In / Sign Up */}
          <div className="absolute right-0 top-0 flex items-center gap-1 text-sm">
            <button className="px-3 py-2 text-neutral-700 hover:text-red-700">
              সাইন ইন
            </button>

            <button className="rounded-md bg-red-700 px-4 py-2 font-semibold text-white hover:bg-red-800">
              সাইন আপ
            </button>
          </div>
        </div>

        {/* Navigation comes from Navlinks */}
       
          <Navlinks />
      
      </header>

    
    </>
  );
};

export default Header;