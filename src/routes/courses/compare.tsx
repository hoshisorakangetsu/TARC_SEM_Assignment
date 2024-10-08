import { createFileRoute, useNavigate } from "@tanstack/react-router";
import HomeBanner from "@/assets/focs_home_banner.jpg";
import PageHero from "@/components/pageHero";
import CompareGrid from "@/components/compareGrid";
import { DegreeCourses, DiplomaCourses } from "@/data";
import { useState } from "react";
import ArrowDownIcon from "@/components/arrowDownIcon";
import clsx from "clsx";

type ProgrammeType = "DIPLOMA" | "DEGREE";

type CompareSearchParams = {
  programmes: { type: ProgrammeType; id: number }[];
};

export const Route = createFileRoute("/courses/compare")({
  component: Compare,
  validateSearch: (search: Record<string, unknown>): CompareSearchParams => {
    const compareIds =
      (search?.programmes as { type: ProgrammeType; id: number }[]) ?? [];
    // at least two things to compare
    while (compareIds.length < 2) {
      compareIds.push({ type: "DIPLOMA", id: -1 }); // type doesn't matter
    }
    // validate and parse the search params into a typed state
    return {
      programmes: compareIds,
    };
  },
});

function ProgrammeSelector({
  value,
  onChange,
}: {
  value: string;
  onChange?: (id: string) => void;
}) {
  return (
    <select
      value={value.split(";")[1] === "-1" ? "select" : value}
      onChange={(e) => onChange?.(e.currentTarget.value)}
      className="p-2 rounded-md"
    >
      <option value="select" disabled>
        Please select a programme
      </option>
      <optgroup label="Diploma">
        {DiplomaCourses.map((el, i) => (
          <option key={i} value={`diploma;${i}`}>
            {el.title}
          </option>
        ))}
      </optgroup>
      <optgroup label="Degree">
        {DegreeCourses.map((el, i) => (
          <option key={i} value={`degree;${i}`}>
            {el.title}
          </option>
        ))}
      </optgroup>
    </select>
  );
}

function Compare() {
  const search = Route.useSearch();
  const navigate = useNavigate();

  // process the search params
  const compareObjects = search.programmes.map((p) => {
    if (p.id >= 0) {
      return p.type === "DIPLOMA"
        ? { ...p, ...DiplomaCourses[p.id] }
        : { ...p, ...DegreeCourses[p.id] };
    } else {
      return { ...p };
    }
  });

  const [expandCompareSelection, setExpandCompareSelection] = useState(true);

  return (
    <div className="min-h-dvh">
      <PageHero img={HomeBanner} text="Compare Programmes" />
      <div className="p-16">
        {/* top section that allows user to select comparisons */}
        {/* maximum compare 3 programmes */}
        {/* #region select comparison */}
        <div className="flex flex-col bg-primaryBg/30 p-4 rounded-xl mb-8">
          <div
            className={clsx(
              "flex items-center justify-between cursor-pointer transition-all",
              { "mb-6": expandCompareSelection }
            )}
            onClick={() => setExpandCompareSelection(!expandCompareSelection)}
          >
            <span className="text-left font-bold text-3xl">
              Comparing Programmes
            </span>
            <button
              className={clsx(
                "w-8 h-8 transition-transform",
                expandCompareSelection ? "rotate-180" : "rotate-0"
              )}
            >
              <ArrowDownIcon />
            </button>
          </div>
          <div
            className={clsx(
              "grid overflow-hidden transition-all",
              expandCompareSelection ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="flex flex-col gap-4 min-h-0">
              <ProgrammeSelector
                value={`${compareObjects[0].type.toLowerCase()};${compareObjects[0].id}`}
                onChange={(v) =>
                  navigate({
                    to: "/courses/compare",
                    search: {
                      programmes: (() => {
                        const [...programmes] = search.programmes;
                        const [type, id] = v.split(";");
                        programmes[0] = {
                          type: type.toUpperCase() as ProgrammeType,
                          id: parseInt(id),
                        };
                        return programmes;
                      })(),
                    },
                  })
                }
              />
              <span className="text-center font-bold">VS</span>
              <ProgrammeSelector
                value={`${compareObjects[1].type.toLowerCase()};${compareObjects[1].id}`}
                onChange={(v) =>
                  navigate({
                    to: "/courses/compare",
                    search: {
                      programmes: (() => {
                        const [...programmes] = search.programmes;
                        const [type, id] = v.split(";");
                        programmes[1] = {
                          type: type.toUpperCase() as ProgrammeType,
                          id: parseInt(id),
                        };
                        return programmes;
                      })(),
                    },
                  })
                }
              />
              {compareObjects.length === 3 ? (
                <div className="flex flex-col gap-2 bg-primaryBg/50 p-2 rounded-lg">
                  <div className="flex justify-center">
                    <span className="text-center font-bold grow">VS</span>
                    <button
                      className="ml-auto mr-0 text-black font-bold pr-2"
                      onClick={() =>
                        navigate({
                          to: "/courses/compare",
                          search: {
                            programmes: [
                              search.programmes[0],
                              search.programmes[1],
                            ],
                          },
                        })
                      }
                    >
                      ✕
                    </button>
                  </div>
                  <ProgrammeSelector
                    value={`${compareObjects[2].type.toLowerCase()};${compareObjects[2].id}`}
                    onChange={(v) =>
                      navigate({
                        to: "/courses/compare",
                        search: {
                          programmes: (() => {
                            const [...programmes] = search.programmes;
                            const [type, id] = v.split(";");
                            programmes[2] = {
                              type: type.toUpperCase() as ProgrammeType,
                              id: parseInt(id),
                            };
                            return programmes;
                          })(),
                        },
                      })
                    }
                  />
                </div>
              ) : (
                <button
                  className="bg-primaryBg rounded-md p-1 text-lg"
                  onClick={() =>
                    navigate({
                      to: "/courses/compare",
                      search: {
                        programmes: (() => {
                          const [...programmes] = search.programmes;
                          programmes[2] = {
                            type: "DIPLOMA", // anything will do as long as id is -1
                            id: -1,
                          };
                          return programmes;
                        })(),
                      },
                    })
                  }
                >
                  + Add One More Comparison
                </button>
              )}
            </div>
          </div>
        </div>
        {/* #endregion select comparison */}
        {/* compareObjects will always at least have one element, check both element is not empty object */}
        {compareObjects.length > 1 &&
        compareObjects.some((v) => {
          console.log(Object.keys(v));
          return (
            v !== undefined &&
            typeof v === "object" &&
            v !== null &&
            Object.keys(v).length !== 0 &&
            v["id"] !== -1
          );
        }) ? (
          <CompareGrid
            objects={compareObjects.map((obj) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { type: _type, id: _id, ...rest } = obj;
              return rest;
            })}
          />
        ) : (
          <h1 className="text-4xl font-bold flex items-center justify-center py-16 bg-primaryBg/30 rounded-xl">
            Please select at least one programme to get started
          </h1>
        )}
      </div>
    </div>
  );
}
