import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import PageHero from "@/components/pageHero";
import { StudentProjects } from "@/data";

export const Route = createLazyFileRoute("/projects/$id")({
  component: ProjectDetail,
});

function TeamMember({
  name,
  avatar,
  programme,
}: {
  name: string;
  avatar: string;
  programme: string;
}) {
  return (
    <div className="flex w-full items-center gap-2 overflow-hidden">
      <img
        src={avatar}
        alt=""
        className="aspect-square rounded-full max-w-10 h-full border"
      />
      <div className="w-full overflow-hidden">
        <p className="font-medium">{name}</p>
        <p
          className="text-sm text-gray-500 text-ellipsis w-full whitespace-nowrap overflow-hidden"
          title={programme}
        >
          {programme}
        </p>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const index = parseInt(id);
  if (isNaN(index) || !StudentProjects[index]) {
    navigate({ to: "/projects", replace: true });
    return;
  }
  const detail = StudentProjects[index];
  return (
    <div className="min-h-dvh">
      <PageHero img={detail.preview} text={detail.name} />
      <div className="p-16">
        <div className="flex gap-8 mb-6">
          <div className="grow">
            <img
              src={detail.preview}
              alt="Project Showcase Image"
              className="w-full h-auto max-h-[520px] object-cover shadow-md rounded-lg"
            />
            <h1 className="font-bold text-2xl my-4">{detail.name}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {detail.tags.map((t, i) => (
                <span className="bg-primaryBg/50 rounded-full px-2 y-1" key={i}>
                  {t}
                </span>
              ))}
            </div>
            <h1 className="font-bold text-2xl my-4">Project Overview</h1>
            <p className="mb-6 text-justify">{detail.overview}</p>
          </div>
          <div className="p-6 min-w-80 max-w-md border shadow-lg rounded-lg h-fit">
            <h1 className="text-xl font-bold">Team Members</h1>
            <div className="flex flex-col gap-2 my-4">
              {detail.members.map((m, i) => (
                <TeamMember
                  name={m.name}
                  programme={m.programme}
                  avatar={m.avatar}
                  key={i}
                />
              ))}
            </div>
            <h1 className="text-xl font-bold">Full Project Demo</h1>
            <a
              href={detail.link}
              target="_blank"
              className="mt-3 text-center font-medium block w-full py-2 bg-primaryBg rounded-md"
            >
              View Full Demo
            </a>
          </div>
        </div>
        <div className="p-4 bg-primaryBg/50 rounded-xl">
          <h1 className="mb-2 text-2xl font-bold px-2">Try It Out! (Live)</h1>
          <iframe
            src={detail.link}
            className="w-full min-h-[600px] rounded-xl bg-white shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
