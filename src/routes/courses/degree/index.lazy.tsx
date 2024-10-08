import PageHero from "@/components/pageHero";
import { DegreeCourses } from "@/data";
import DegreeBanner from "@/assets/degree_bg.png";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/courses/degree/")({
  component: DegreeHome,
});

function DegreeCard({ title, id }: { title: string; id: number }) {
  return (
    <Link
      to="/courses/degree/$id"
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

function DegreeHome() {
  return (
    <div className="min-h-dvh">
      <PageHero img={DegreeBanner} text="Bachelor Degree Courses" />
      <div className="p-16 flex flex-wrap justify-center gap-10">
        {DegreeCourses.map((el, i) => (
          <DegreeCard title={el.title} id={i} />
        ))}
      </div>
    </div>
  );
}
