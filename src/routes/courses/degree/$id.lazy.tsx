import Accordian from "@/components/accordian";
import PageHero from "@/components/pageHero";
import { DegreeCourses } from "@/data";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import DegreeBanner from "@/assets/degree_bg.png";
import EnrollBtn from "@/components/enrollBtn";

export const Route = createLazyFileRoute("/courses/degree/$id")({
  component: DegreeDetails,
});

function DegreeDetails() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const index = parseInt(id);
  if (isNaN(index) || !DegreeCourses[index]) {
    navigate({ to: "/courses/degree", replace: true });
    return;
  }
  return (
    <div className="min-h-dvh">
      <div className="relative">
        <PageHero img={DegreeBanner} text={DegreeCourses[index].title} />
        <button
          className="absolute bottom-4 right-4 bg-primaryBg px-2 py-1 rounded-md"
          onClick={() => {
            navigate({
              to: "/courses/compare",
              search: { programmes: [{ type: "DIPLOMA", id: index }] },
            });
          }}
        >
          Compare
        </button>
      </div>
      <div className="p-16">
        {/* #region overview */}
        <p className="text-lg font-bold">Programme Overview</p>
        <p>{DegreeCourses[index].overview}</p>
        {/* #endregion overview */}
        {/* #region basic info */}
        <div className="grid grid-cols-3 gap-6 mt-16 mb-8">
          {/* #region campuses */}
          <div className="mb-2">
            <p className="text-lg font-bold">Campuses</p>
            <ul className="list-disc list-inside">
              {DegreeCourses[index].campus.map((c) => (
                <li>{c}</li>
              ))}
            </ul>
          </div>
          {/* #endregion campuses */}
          {/* #region intake */}
          <div className="mb-2">
            <p className="text-lg font-bold">Intake</p>
            <ul className="list-disc list-inside">
              {DegreeCourses[index].intake.map((i) => (
                <li className="[&>*]:align-text-top">
                  {i.description !== "" ? (
                    <div className="inline-block">
                      <p className="font-bold">{i.year}</p>
                      <p>{i.description}</p>
                    </div>
                  ) : (
                    <p className="inline-block">{i.year}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* #endregion intake */}
          {/* #region duration */}
          <div className="mb-2">
            <p className="text-lg font-bold">Duration</p>
            <p>{DegreeCourses[index].duration}</p>
          </div>
          {/* #endregion duration */}
        </div>
        {/* #endregion basic info */}
        {/* #region accordians */}
        <div className="flex flex-col gap-8">
          {/* #region entry requirement */}
          <Accordian title="Minimum Entry Requirement">
            <img
              src={DegreeCourses[index].entryRequirements}
              alt="Entry Requirements"
              className="w-full h-auto"
            />
          </Accordian>
          {/* #endregion entry requirement */}
          {/* #region programme outline */}
          <Accordian title="Programme Outline">
            <ul className="list-disc list-inside px-4">
              {DegreeCourses[index].outline.map((o) => (
                <li>{o}</li>
              ))}
            </ul>
          </Accordian>
          {/* #endregion programme outline */}
          <div className="grid grid-cols-2 gap-8">
            {/* #region career prospects */}
            <Accordian title="Career Prospects">
              <ul className="list-disc list-inside px-4">
                {DegreeCourses[index].career.map((c) => (
                  <li>{c}</li>
                ))}
              </ul>
            </Accordian>
            {/* #endregion career prospects */}
            {/* #region fees */}
            <Accordian title="Fees">
              <p>Estimated fees: {DegreeCourses[index].fee}</p>
            </Accordian>
            {/* #endregion fees */}
          </div>
        </div>
        {/* #endregion accordians */}
      </div>
      <EnrollBtn />
    </div>
  );
}
