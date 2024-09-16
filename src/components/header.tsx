import Logo from "@/assets/tarumt_logo.png";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { useEffect, useState } from "react";

const linkActiveClass = "[&.active]:font-bold";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        "flex w-full justify-between items-center pr-4 fixed top-0 transition-colors",
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
            <Link to="/" className={linkActiveClass}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkActiveClass}>
              About Us
            </Link>
          </li>
          {/* moved accreditation tab to nest inside programmes tab */}
          <li>Programmes</li>
          {/* moved research center tab to nest inside facilities tab */}
          <li>Facilities</li>
          <li>People</li>
          <li>
            <Link to="/highlights" className={linkActiveClass}>
              Highlights
            </Link>
          </li>
          <li>
            <Link to="/achievements" className={linkActiveClass}>
              Achievements
            </Link>
          </li>
          <li>
            <Link to="/contactUs" className={linkActiveClass}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
