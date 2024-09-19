import PageHero from "@/components/pageHero";
import DiplomaBanner from "@/assets/diploma_bg.jpg";
import { DiplomaCourses } from "@/data";
import { createLazyFileRoute } from "@tanstack/react-router";
import Accordian from "@/components/accordian";

export const Route = createLazyFileRoute("/courses/diploma/$id")({
  component: DiplomaDetail,
});

function DiplomaDetail() {
  const { id } = Route.useParams();
  const navigate = Route.useNavigate();
  const index = parseInt(id);
  if (isNaN(index)) {
    navigate({ to: "/courses/diploma", replace: true });
    return;
  }
  return (
    <div className="min-h-dvh">
      <PageHero img={DiplomaBanner} text={DiplomaCourses[index].title} />
      <div className="p-16">
        <Accordian title="Minimum Entry Requirement">
          <div>HELLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOO</div>
        </Accordian>
      </div>
    </div>
  );
}
