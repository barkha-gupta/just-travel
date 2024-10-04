import ChevronDownIcon from "@/public/assets/icons/chevron-down.svg";

const DropdownList = [
  { title: "All Girls's Trips", link: "/all-girls-trips" },
  { title: "Corporate Trips", link: "/corporate-trips" },
  { title: null, link: null },
  { title: "About Us", link: "/about-us" },
  { title: "Contact", link: "/contact" },
  { title: "Newsletter", link: "/newsletter" },
];
const HeaderDropdown = () => {
  return (
    <div className="relative group">
      <div className="flex items-center gap-1 cursor-pointer">
        <div>More</div>
        <div className="w-4 h-4 stroke-2">
          <ChevronDownIcon />
        </div>
      </div>
      <div className="absolute left-0 min-w-44 bg-[#fdfdfd] shadow-md rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible z-10 p-3">
        <ul>
          {DropdownList.map((item, index) =>
            item.title ? (
              <li
                key={index}
                className="p-2 text-center hover:text-sec cursor-pointer rounded"
              >
                {item.title}
              </li>
            ) : (
              <hr key={index} className="my-2 border" />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderDropdown;
