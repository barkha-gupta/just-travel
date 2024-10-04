import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import logo from "@/public/assets/images/logo.png";

const Headerr = () => {
  return (
    <>
      {/* first */}
      <div className="w-full shadow-md flex justify-between items-center px-5 py-4 lg:hidden">
        <div className="w-40 h-9">
          <Image
            src={logo}
            alt="company logo"
            className="w-full h-full"
            priority
          />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2">
              <FaBars />
            </button>
          </SheetTrigger>

          <SheetContent>
            <div className="h-full flex gap-4 py-8 flex-col items-center justify-evenly font-medium">
              <div className="cursor-pointer hover:text-sec">HOME</div>
              <div className="cursor-pointer hover:text-sec">YATRAS</div>
              <div className="cursor-pointer hover:text-sec">TREKS</div>
              <div className="cursor-pointer hover:text-sec">
                WEEKEND GETAWAYS
              </div>
              <div className="cursor-pointer hover:text-sec">ABOUT US</div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* second */}
      <div className="w-full px-5 py-4 hidden lg:block">
        <div className="grid grid-cols-5 items-center font-medium text-sec">
          <div className="col-span-2 flex justify-evenly">
            <div className="cursor-pointer hover:text-black">HOME</div>
            <div className="cursor-pointer hover:text-black">YATRAS</div>
            <div className="cursor-pointer hover:text-black">
              WEEKEND GETAWAYS
            </div>
          </div>

          <div className="col-span-1 w-full h-9 flex justify-center">
            <Image
              src={logo}
              alt="company logo"
              className="w-40 h-full"
              priority
            />
          </div>

          <div className="col-span-2 flex justify-evenly">
            <div className="cursor-pointer hover:text-black">TREKS</div>
            <div className="cursor-pointer hover:text-black">ABOUT US</div>
            <div className="cursor-pointer hover:text-black">CONTACT US</div>
          </div>
        </div>
      </div>

      {/* it will have two design. 1- for large screen and other for normal */}
    </>
  );
};

export default Headerr;
