import PageHero from "@/components/pageHero";
import { DiplomaCourses } from "@/data";
import DiplomaBanner from "@/assets/diploma_bg.jpg";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/courses/diploma/")({
  component: DiplomaHome,
});

function DiplomaCard({ title, id }: { title: string; id: number }) {
  return (
    <Link
      to="/courses/diploma/$id"
      params={{ id: id.toString() }}
      className="font-bold text-2xl px-8 py-16 w-[24rem] flex justify-center items-center text-center bg-primaryBg/30 rounded-2xl relative border-2 border-black overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 bg-primaryBg p-2 border-b-2 border-black">
        <span className="block w-4 h-4 rounded-full bg-white"></span>
      </div>
      {title}
    </Link>
  );
}

function DiplomaHome() {
  return (
    <div className="min-h-dvh">
      <PageHero
        img={DiplomaBanner}
        text="Faculty of Computing and Information Technology"
      />
      <div className="p-16 flex flex-wrap justify-center gap-10">
        {DiplomaCourses.map((el, i) => (
          <DiplomaCard title={el.title} id={i} />
        ))}
      </div>
    </div>
  );
}
