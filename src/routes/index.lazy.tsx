import { createLazyFileRoute } from "@tanstack/react-router";

import HomeBanner from "@/assets/focs_home_banner.jpg";
import MDPDTILogo from "@/assets/MD_PDTI-fc.png";
import Partners from "@/assets/partners.png";
import Achievement1 from "@/assets/achievement1.png";
import Achievement2 from "@/assets/achievement2.png";
import TSKong from "@/assets/alumni_ts_kong.png";
import MrLim from "@/assets/alumni_mr_lim.png";
import MrFong from "@/assets/alumni_mr_fong.png";
import PageHero from "@/components/pageHero";
import { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import classes from "./index.module.css";
import EnrollBtn from "@/components/enrollBtn";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

interface AtAGlanceProps {
  children?: ReactNode;
  title: string;
  data?: string;
}

function AtAGlanceDataItem({ children, title, data }: AtAGlanceProps) {
  return (
    <div className="flex flex-col justify-center items-center font-[Ubuntu,Arial]">
      {children ? (
        children
      ) : (
        <span className="font-semibold text-3xl">{data}</span>
      )}
      <span className="text-sm text-center">{title}</span>
    </div>
  );
}

function Carousel() {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()]);

  return (
    <div className={classes.embla} ref={emblaRef}>
      <div className={`${classes.embla__container} text-2xl font-bold my-16`}>
        {[...Array(5).keys()].map((n) => {
          return (
            <div className={classes.embla__slide} key={n}>
              Slide {n} (I can't access the images)
            </div>
          );
        })}
      </div>
    </div>
  );
}

// util component to keep the left and right style column layout consistent
function LeftRightCol({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[3fr,9fr]">
      <div className="flex flex-col text-textBase">
        <span className="text-4xl font-bold leading-relaxed">{title}</span>
        <span className="font-bold text-4xl">_____________</span>
        {subtitle && <span className="text-lg mt-2">{subtitle}</span>}
      </div>
      {children}
    </div>
  );
}

interface AlumniProps {
  name: string;
  img: string;
  title: string;
  company: string;
}

function AlumniCard({ name, img, title, company }: AlumniProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={img} alt="Alumni Picture" aria-hidden />
      <div className="mt-2">
        <span className="font-bold text-lg">{name}</span>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center text-sm">
        <span>{title}</span>
        <span>{company}</span>
      </div>
    </div>
  );
}

function Index() {
  const focsGlanceData: AtAGlanceProps[] = [
    {
      title: "FOUNDED",
      data: "1972",
    },
    {
      title: "DEPARTMENTS",
      data: "5",
    },
    {
      title: "PROGRAMMES",
      data: "16",
    },
    {
      title: "RESEARCH CENTRES",
      data: "6",
    },
    {
      title: "ACTIVE STUDENTS",
      data: "3500+",
    },
    {
      title: "MDEC PDTI RECOGNITION",
      children: (
        <div>
          <span className="font-semibold text-3xl">1</span>
          <span className="font-semibold text-2xl">st </span>
          <span className="text-sm">FACULTY</span>
        </div>
      ),
    },
    {
      title: "PROGRAMMES MDEC PDTI RECOGNITION",
      data: "10",
    },
    {
      title: "CENTRES OF EXCELLENCE",
      data: "2",
    },
  ];

  const alumniData: AlumniProps[] = [
    {
      img: TSKong,
      name: "Ts. Kong Wai Keat",
      title: "OT Security Consultant",
      company: "YNY Technology Sdn. Bhd.",
    },
    {
      img: MrLim,
      name: "Mr. Lim Yu Jie",
      title: "Technical Consulting Engineer",
      company: "Cisco Malaysia",
    },
    {
      img: MrFong,
      name: "Mr. Fong Choong Fook",
      title: "Founder & Executive",
      company: "Chairman of LGMS Berhad",
    },
  ];

  return (
    <div className="min-h-dvh">
      <PageHero
        img={HomeBanner}
        text="Faculty of Computing and Information Technology"
      />
      <div className="p-12">
        {/* #region at a glance */}
        <LeftRightCol title="FOCS at a Glance">
          <div className="grid grid-cols-4 grid-rows-2 text-textBase">
            {focsGlanceData.map((data) => (
              <AtAGlanceDataItem {...data} key={data.title} />
            ))}
          </div>
        </LeftRightCol>
        {/* #endregion */}
        <Carousel />
        {/* #region MDEC thingy */}
        <div className="grid grid-cols-[3fr,9fr]">
          <img src={MDPDTILogo} alt="MD_PDTI Logo" aria-hidden />
          <div className="text-textBase text-2xl font-bold flex items-center justify-center">
            <p className="text-center">
              <span className="text-primaryText">FOCS</span> is in TOP 5 of
              Highest Graduates and Graduates' Salary above RM4,000
            </p>
          </div>
        </div>
        <p className="text-center text-sm mt-2 p-2">
          As part of the{" "}
          <span className="font-bold">
            MDEC Premier Digital Tech Institution (PDTI)
          </span>{" "}
          which aims to produce quality talents for digital tech careers, we
          work closely with the industries to design and develop our curriculum
          to ensure our digital tech graduates are industry-ready.
        </p>
        {/* #endregion */}
        <hr className="my-8 bg-black/10" />
        {/* #region achievements */}
        <LeftRightCol title="Achievements" subtitle="STAFF & STUDENTS">
          <div className="grid grid-cols-2 gap-4 p-2">
            <img src={Achievement1} alt="Achievement 1" />
            <img src={Achievement2} alt="Achievement 2" />
          </div>
        </LeftRightCol>
        {/* #endregion */}
        <hr className="my-8 bg-black/10" />
        {/* #region partners */}
        <LeftRightCol title="Partners" subtitle="ACADEMIC & INDUSTRY">
          <div>
            <img src={Partners} alt="Partners" />
          </div>
        </LeftRightCol>
        {/* #endregion */}
        <hr className="my-8 bg-black/10" />
        {/* #region alumni */}
        <LeftRightCol title="Alumni" subtitle="TESTIMONIALS">
          <div className="flex gap-6">
            {alumniData.map((a) => (
              <AlumniCard {...a} key={a.name} />
            ))}
          </div>
        </LeftRightCol>
        {/* #endregion */}
      </div>
      <EnrollBtn />
    </div>
  );
}
