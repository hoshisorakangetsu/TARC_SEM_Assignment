import { createLazyFileRoute } from "@tanstack/react-router";
import HomeBanner from "@/assets/focs_home_banner.jpg";
import PageHero from "@/components/pageHero";
import CompareGrid from "@/components/compareGrid";
import { DiplomaCourses } from "@/data";

export const Route = createLazyFileRoute("/courses/diploma/compare")({
  component: DiplomaCompare,
});

function DiplomaCompare() {
  return (
    <div className="min-h-dvh">
      <PageHero img={HomeBanner} text="Compare Programmes" />
      <div className="p-16">
        <CompareGrid
          objects={[
            DiplomaCourses[0] as unknown as { [k: string]: unknown },
            DiplomaCourses[1] as unknown as { [k: string]: unknown },
          ]}
        />
      </div>
    </div>
  );
}
