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
    <div className="flex flex-col">
      <div className="p-5 flex flex-col lg:flex-row lg:gap-4 gap-8 justify-between text-sm">
        <div className="flex flex-col items-center">
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
        <div className="flex flex-row lg:flex-col gap-3">
          <div className="font-semibold">Company</div>
          <div className="w-full text-sec flex flex-row lg:flex-col lg:gap-2 gap-4">
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Our Blogs</div>
            <div>Payment Policy</div>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col gap-3 ">
          <div className="font-semibold">Trips</div>
          <div className="w-full text-sec flex flex-row lg:flex-col lg:gap-2 gap-4">
            <div>Yatras</div>
            <div>Treks</div>
            <div>Weekend Gateways</div>
            <div>All Girls Trip</div>
            <div>Corporate Trips</div>
          </div>
        </div>

        <div className="lg:flex lg:flex-col gap-3 lg:py-0 py-4 lg:px-0 px-4 lg:shadow-none lg:bg-white shadow-md bg-[#daefff] rounded-lg">
          <div className="font-semibold lg:p-0 pb-2">Contact US</div>
          <div className="font-medium lg:flex lg:flex-col lg:gap-2">
            <span>B-42, 2nd Floor, Tower - B</span>
            <span>The Corenthum, Block A, Sector 62 Noida </span>
            <span>Uttar Pradesh, 201201</span>
            <div className="lg:pt-0 pt-4">+91-8810 457 631</div>
            <div className="lg:pt-0 pt-4">contact@justwravel.com</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between border-t p-5 gap-2">
        <div className="flex items-center gap-1">
          <span className="fill-sec">
            <CopyrightIcon />
          </span>
          <span className="text-sm">2015-2024 JustWravel Pvt. Ltd.</span>
        </div>
        <div className="text-sm text-sec">
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
