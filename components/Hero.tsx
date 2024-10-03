import ReviewsIcon from "@/public/assets/icons/review.svg";
import TravellersIcon from "@/public/assets/icons/travellers.svg";
import DestinationIcon from "@/public/assets/icons/destination.svg";
import ExperienceIcon from "@/public/assets/icons/experience.svg";
import SmallBannerImage from "@/public/assets/images/home-background.jpg";
import Image from "next/image";
const footerList = [
  { icon: "reviews", text: "7095+", title: "Reviews" },
  {
    icon: "travellers",
    text: "50,000+",
    title: "Satisfied Travelers",
  },
  {
    icon: "destination",
    text: "50+",
    title: "Destinations",
  },
  {
    icon: "experience",
    text: "7 Years+",
    title: "Experience",
  },
];
const Hero = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "reviews":
        return (
          <div className="">
            <ReviewsIcon />
          </div>
        );
      case "travellers":
        return <TravellersIcon />;
      case "destination":
        return <DestinationIcon />;
      case "experience":
        return <ExperienceIcon />;
      default:
        return null; // or return a default icon
    }
  };
  return (
    <div className="w-full">
      <div
        className={`bg-bannerImg bg-no-repeat bg-cover bg-center w-full h-[800px] p-5 flex flex-col justify-between`}
      >
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="py-4 text-white flex flex-col justify-between">
            <div className="mt-16 font-bold text-5xl flex flex-col gap-5">
              <p className="tracking-wide flex items-end">
                <span>Book Your</span>
                <span>
                  <Image
                    src={SmallBannerImage}
                    alt="small banner image"
                    width={120}
                    height={100}
                    className="rounded-3xl ml-5"
                  />
                </span>
              </p>
              <div className="tracking-wide flex items-center gap-2 ">
                <div>Trip to</div>
                <div className="inner-headings text-tertiary">
                  <span>
                    Himachal <br />
                    Uttarakhand <br />
                    Spiti <br />
                    Tawang <br />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl">
                <span className="text-tertiary">Wander |</span>
                <span> Travel |</span>
                <span className="text-tertiary"> Connect |</span>
                <span> Repeat</span>
              </div>
              <p className="font-medium text-lg">
                Where Adventure meets Community
              </p>
              <p>#wravelerforlife</p>
            </div>

            <div className="mb-16">
              <button className="px-8 py-4 rounded-full bg-tertiary text-primary font-bold text-xl">
                Lets book your trip
              </button>
            </div>
          </div>
          <div> vertical carousel</div>
        </div>
        <footer>
          <ul className="flex justify-between p-4">
            {footerList.map((item, index) => (
              <li
                key={index}
                className="flex gap-2 justify-center items-center text-white"
              >
                <div>{getIcon(item.icon)}</div>
                <div>
                  <p className="font-bold text-xl">{item.text}</p>

                  <p className="text-sm">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Hero;
