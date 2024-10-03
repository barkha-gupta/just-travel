import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import PhoneIcon from "@/public/assets/icons/phone.svg";
import SearchIcon from "@/public/assets/icons/search.svg";
import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center gap-4 shadow-md w-full">
      <Image src={logo} alt="company logo" className="w-40 h-9" priority />

      <div className="w-6/12 flex justify-between items-center gap-8 font-medium">
        <div>
          <p className="bg-gradient-to-r from-[#88c444] to-[#2db4e7] bg-clip-text text-transparent cursor-pointer font-semibold text-lg link-with-hover-line ">
            Early Bird Discount
          </p>
        </div>
        <div className="hover:text-secondary cursor-pointer">
          Backpacking Trips
        </div>
        <div className="hover:text-secondary cursor-pointer">Treks</div>
        <HeaderDropdown />
      </div>

      <div className="flex gap-4">
        <div className="flex gap-1">
          <div className="size-9 border p-2 rounded-full bg-gray-100">
            <PhoneIcon />
          </div>
          <div className="text-primary text-sm">
            <p>Call Us</p>
            <p className="font-medium">+91 9669009880</p>
          </div>
        </div>
        <div className="size-11 fill-btnPrimary cursor-pointer">
          <SearchIcon />
        </div>
        <button className="bg-btnPrimary text-white font-medium px-4 py-2 rounded-3xl">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
