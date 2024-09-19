import PageHero from "@/components/pageHero";
import DiplomaBanner from "@/assets/diploma_bg.jpg";
import { DiplomaCourses } from "@/data";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import Accordian from "@/components/accordian";

export const Route = createLazyFileRoute("/courses/diploma/$id")({
  component: DiplomaDetail,
});

function DiplomaDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const index = parseInt(id);
  if (isNaN(index) || !DiplomaCourses[index]) {
    navigate({ to: "/courses/diploma", replace: true });
    return;
  }
  return (
    <div className="min-h-dvh">
      <PageHero img={DiplomaBanner} text={DiplomaCourses[index].title} />
      <div className="p-16">
        {/* #region overview */}
        <p className="text-lg font-bold">Programme Overview</p>
        <p>{DiplomaCourses[index].overview}</p>
        {/* #endregion overview */}
        {/* #region basic info */}
        <div className="grid grid-cols-3 gap-6 mt-16 mb-8">
          {/* #region campuses */}
          <div className="mb-2">
            <p className="text-lg font-bold">Campuses</p>
            <ul className="list-disc list-inside">
              {DiplomaCourses[index].campus.map((c) => (
                <li>{c}</li>
              ))}
            </ul>
          </div>
          {/* #endregion campuses */}
          {/* #region intake */}
          <div className="mb-2">
            <p className="text-lg font-bold">Intake</p>
            <ul className="list-disc list-inside">
              {DiplomaCourses[index].intake.map((i) => (
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
            <p>{DiplomaCourses[index].duration}</p>
          </div>
          {/* #endregion duration */}
        </div>
        {/* #endregion basic info */}
        {/* #region accordians */}
        <div className="flex flex-col gap-8">
          {/* #region entry requirement */}
          <Accordian title="Minimum Entry Requirement">
            <img
              src={DiplomaCourses[index].entryRequirements}
              alt="Entry Requirements"
              className="w-full h-auto"
            />
          </Accordian>
          {/* #endregion entry requirement */}
          {/* #region programme outline */}
          <Accordian title="Programme Outline">
            <ul className="list-disc list-inside px-4">
              {DiplomaCourses[index].outline.map((o) => (
                <li>{o}</li>
              ))}
            </ul>
          </Accordian>
          {/* #endregion programme outline */}
          {/* #region academic progression */}
          <Accordian title="Academic Progression">
            <div className="px-4">
              <p className="mb-2">Graduates may be admitted into Year 2 of:</p>
              <ul className="list-disc list-inside mx-4">
                {DiplomaCourses[index].progression.map((o) => (
                  <li>{o}</li>
                ))}
              </ul>
            </div>
          </Accordian>
          {/* #endregion academic progression */}
          <div className="grid grid-cols-2 gap-8">
            {/* #region career prospects */}
            <Accordian title="Career Prospects">
              <ul className="list-disc list-inside px-4">
                {DiplomaCourses[index].career.map((c) => (
                  <li>{c}</li>
                ))}
              </ul>
            </Accordian>
            {/* #endregion career prospects */}
            {/* #region fees */}
            <Accordian title="Fees">
              <p>Estimated fees: {DiplomaCourses[index].fee}</p>
            </Accordian>
            {/* #endregion fees */}
          </div>
        </div>
        {/* #endregion accordians */}
      </div>
    </div>
  );
}
