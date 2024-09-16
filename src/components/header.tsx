import Logo from "@/assets/tarumt_logo.png";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const linkNavClass = clsx(
    "[&.active]:font-bold block px-2",
    isScrolled ? "text-black" : "text-white"
  );

  useEffect(() => {
    const scrollListener = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", scrollListener);

    return () => {
      document.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <div
      className={clsx(
        "flex w-full justify-between items-center pr-4 fixed top-0 transition-colors z-[999]",
        {
          "bg-primary": isScrolled,
        }
      )}
    >
      <img
        src={Logo}
        alt="TARUMT Logo"
        className="max-h-[56px] max-w-[225px] px-4 py-2"
      />
      <nav className="flex h-min">
        <ul className="flex gap-2">
          <li>
            <Link to="/" className={linkNavClass}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkNavClass}>
              About Us
            </Link>
          </li>
          {/* moved accreditation tab to nest inside programmes tab */}
          <li className={linkNavClass}>Programmes</li>
          <li>
            <Link to="/facilities" className={linkNavClass}>
              Facilities
            </Link>
          </li>
          <li className={linkNavClass}>People</li>
          <li>
            <Link to="/highlights" className={linkNavClass}>
              Highlights
            </Link>
          </li>
          <li>
            <Link to="/achievements" className={linkNavClass}>
              Achievements
            </Link>
          </li>
          <li>
            <Link to="/researchCenter" className={linkNavClass}>
              Research
            </Link>
          </li>
          <li>
            <Link to="/contactUs" className={linkNavClass}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
