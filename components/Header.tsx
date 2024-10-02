import Image from "next/image";
import logo from "@/app/assets/images/logo.png";

const Header = () => {
  return (
    <div className="border border-red-600 p-5 flex justify-between items-center gap-2">
      <Image src={logo} alt="company logo" className="w-40 h-9" priority />

      <div></div>
      <div>
        <div>
          <button></button>
          <div className="text-primary text-sm">
            <p>Call Us</p>
            <p className="font-medium">+91 9669009880</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
