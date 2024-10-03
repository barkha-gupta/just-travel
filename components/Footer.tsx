import CopyrightIcon from "@/public/assets/icons/copyright.svg";
import Logo from "@/public/assets/images/logo.png";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="">
      <div className="p-4 ">
        <div className="flex flex-col">
          <div className="w-52 h-10">
            <Image src={Logo} alt="company logo" />
          </div>
          <div className="flex gap-2 mt-8">
            <FaFacebookSquare size="36" className="fill-blue-600" />

            <FaInstagramSquare size="36" className="fill-pink-600" />

            <FaLinkedin size="36" className="fill-blue-600" />

            <FaYoutubeSquare size="36" className="fill-red-600" />

            <FaSquareTwitter size="36" className="fill-blue-600" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="border-t px-4 py-8 flex items-center gap-1">
          <span className="fill-secondary">
            <CopyrightIcon />
          </span>
          <span className="text-sm">2015-2024 JustWravel Pvt. Ltd.</span>
        </div>
        <div className="text-sm text-secondary">
          <span>
            Privacy Policy <span className="text-black">|</span>{" "}
          </span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
