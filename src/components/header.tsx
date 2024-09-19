import Logo from "@/assets/tarumt_logo.png";
import { Link, LinkProps } from "@tanstack/react-router";
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import { DiplomaCourses, DegreeCourses } from "@/data";

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      focusable="false"
      className={className}
    >
      <g transform="translate(9.7,12) rotate(45)">
        <path d="M-4.2 0 L4.2 0" strokeWidth="2"></path>
      </g>
      <g transform="translate(14.3,12) rotate(-45)">
        <path d="M-4.2 0 L4.2 0" strokeWidth="2"></path>
      </g>
    </svg>
  );
}

function NestedLink(props: LinkProps & { title: string; className?: string }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className={`relative ${props.className}`}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <Link to={props.to} className="flex items-center gap-1">
        <span>{props.title}</span>{" "}
        <ArrowDownIcon
          className={clsx("w-[1em] transition-transform", {
            "rotate-180": isMouseOver,
          })}
        />
      </Link>
      {isMouseOver && (
        <div className="absolute top-full left-0 bg-primaryBg p-2 min-w-full shadow-md">
          {props.children as ReactNode}
        </div>
      )}
    </div>
  );
}

function NestedLinkLv2(
  props: LinkProps & {
    title: string;
    titleClassName?: string;
    className?: string;
  }
) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={props.className}>
      <div
        className={`flex justify-between gap-2 items-center w-full ${props.titleClassName}`}
      >
        <Link to={props.to}>{props.title}</Link>
        <button
          className="p-1 rounded-md bg-white/30 shadow-md hover:shadow-xl active:shadow-md transition-shadow"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ArrowDownIcon
            className={clsx("w-[1em] transition-transform", {
              "rotate-180": isOpen,
            })}
          />
        </button>
      </div>
      <div
        className={clsx(
          "grid overflow-hidden transition-all",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">{props.children as ReactNode}</div>
      </div>
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const linkNavClass = clsx(
    "[&.active]:font-bold block p-2",
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
  }, []);

  return (
    <header
      className={clsx(
        "flex w-full justify-between items-center pr-4 fixed top-0 transition-colors z-[999]",
        {
          "bg-primaryBg": isScrolled,
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
          <li>
            <NestedLink title="Programmes" className={linkNavClass}>
              <div className="grid grid-flow-row">
                <Link
                  to="/about"
                  className="[&.active]:font-bold text-black text-nowrap px-2 py-1"
                >
                  Foundation
                </Link>
                <NestedLinkLv2
                  title="Diploma"
                  to="/courses/diploma"
                  titleClassName="[&.active]:font-bold text-black"
                  className="px-2 py-1"
                >
                  <div className="flex flex-col gap-2 pl-3 pt-2 max-w-[25ch]">
                    {DiplomaCourses.map((el, i) => (
                      <Link
                        to="/courses/diploma/$id"
                        className="[&.active]:font-bold text-black text-nowrap text-ellipsis overflow-hidden"
                        title={el.title}
                        params={{ id: i.toString() }}
                      >
                        {el.title}
                      </Link>
                    ))}
                  </div>
                </NestedLinkLv2>
                <NestedLinkLv2
                  title="Bachelor Degree"
                  titleClassName="[&.active]:font-bold text-black"
                  className="px-2 py-1"
                >
                  <div className="flex flex-col gap-2 pl-3 pt-2 max-w-[25ch]">
                    {DegreeCourses.map((el, i) => (
                      <Link
                        to="/courses/degree/$id"
                        params={{ id: i.toString() }}
                        className="[&.active]:font-bold text-black text-nowrap text-ellipsis overflow-hidden"
                        title={el.title}
                      >
                        {el.title}
                      </Link>
                    ))}
                  </div>
                </NestedLinkLv2>
                <Link
                  to="/about"
                  className="[&.active]:font-bold text-black text-nowrap px-2 py-1"
                >
                  Post Graduate
                </Link>
                <a
                  href="https://www.tarc.edu.my/mqa/programmes-accreditated-by-mqa/kuala-lumpur-main-campus/faculty-of-computing-and-information-technology/"
                  target="_blank"
                  className="text-black text-nowrap px-2 py-1"
                >
                  Accreditation Status
                </a>
              </div>
            </NestedLink>
          </li>
          <li>
            <Link to="/facilities" className={linkNavClass}>
              Facilities
            </Link>
          </li>
          <NestedLink title="People" className={linkNavClass}>
            <div className="grid grid-flow-row">
              <div className="flex flex-col max-w-[20ch]">
                <Link
                  to="/about"
                  className="[&.active]:font-bold text-black text-nowrap text-ellipsis overflow-hidden px-2 py-1"
                >
                  Faculty Staff
                </Link>
                <Link
                  to="/about"
                  className="[&.active]:font-bold text-black text-nowrap text-ellipsis overflow-hidden px-2 py-1"
                >
                  Alumni
                </Link>
                <Link
                  to="/about"
                  className="[&.active]:font-bold text-black text-nowrap text-ellipsis overflow-hidden px-2 py-1"
                >
                  External Examiners
                </Link>
                <Link
                  to="/about"
                  className="[&.active]:font-bold text-black text-nowrap text-ellipsis overflow-hidden px-2 py-1"
                >
                  Industry Expert Advisory Panel (IEAP)
                </Link>
              </div>
            </div>
          </NestedLink>
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
    </header>
  );
}
