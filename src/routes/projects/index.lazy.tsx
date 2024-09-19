import { createLazyFileRoute, Link } from "@tanstack/react-router";
import DegreeBanner from "@/assets/degree_bg.png";
import PageHero from "@/components/pageHero";
import { Project, StudentProjects } from "@/data";

export const Route = createLazyFileRoute("/projects/")({
  component: Projects,
});

function ProjectCard({
  name,
  shortDescription,
  tags,
  preview,
  id
}: Project & { id: number }) {
  return (
    <Link to="/projects/$id" params={{id: id.toString()}} className="p-4 border border-gray-300 rounded-xl transition-all bg-primaryBg/10 shadow-md hover:shadow-lg active:shadow-md">
      <img src={preview} alt="Project Preview Image" className="h-60 w-full object-cover" />
      <h1 className="font-bold text-2xl my-4 mb-2">{name}</h1>
      <p className="mb-6">{shortDescription}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t, i) => (
          <span className="bg-primaryBg/50 rounded-full px-2 y-1" key={i}>
            {t}
          </span>
        ))}
      </div>
      <button className="py-2 rounded-md bg-primaryBg w-full">View Project Detail</button>
    </Link>
  );
}

function Projects() {
  return (
    <div className="min-h-dvh">
      <PageHero img={DegreeBanner} text="Students' Innovative Projects" />
      <div className="p-16 grid grid-cols-3 gap-8">
        {StudentProjects.map((p, i) => <ProjectCard {...p} key={i} id={i} />)}
      </div>
    </div>
  );
}
