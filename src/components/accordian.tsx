import clsx from "clsx";
import { PropsWithChildren, useState } from "react";
import ArrowDownIcon from "./arrowDownIcon";

export default function Accordian({
  title,
  children,
  className = "",
}: PropsWithChildren<{ title: string; className?: string }>) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${className}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex justify-between"
      >
        <span className="text-lg font-bold">{title}</span>
        <ArrowDownIcon
          className={clsx("w-[2em] transition-transform", {
            "rotate-180": isOpen,
          })}
        />
      </div>
      <hr className="mt-4 border-black" />
      <div
        className={clsx(
          "grid overflow-hidden transition-all",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 pt-4">{children}</div>
      </div>
    </div>
  );
}
