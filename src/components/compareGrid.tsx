import { DiplomaCourse } from "@/data";
import { useCallback, useMemo, useState } from "react";

// only used in here so far, no need another utils file
function camelToTitleCase(s: string) {
  return s
    .replace(/([a-z]*)([A-Z][a-z]*)/g, "$1 $2") // Insert space between lowercase and uppercase letters
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/\b(\w)/g, (match) => match.toUpperCase()); // Capitalize first letter of each word
}

// can hack cuz we know which features require special renderring
function FeatureRender({
  featureName,
  v,
}: {
  featureName: string;
  v: unknown;
}) {
  // for auto complete only, makes life easier :))
  switch (featureName as keyof DiplomaCourse) {
    case "campus":
      return (
        <ul className="list-disc list-inside pl-2 text-left">
          {(v as string[]).map((c) => (
            <li>{c}</li>
          ))}
        </ul>
      );
    case "entryRequirements":
      return (
        <div>
          <img
            src={v as string}
            alt="Entry Requirement"
            className="w-full h-auto"
          />
        </div>
      );
    case "outline":
      return (
        <ul className="list-disc list-inside pl-2 text-left">
          {(v as string[]).map((c) => (
            <li>{c}</li>
          ))}
        </ul>
      );
    case "progression":
      return (
        <ul className="list-disc list-inside pl-2 text-left">
          {(v as string[]).map((c) => (
            <li>{c}</li>
          ))}
        </ul>
      );
    case "career":
      return (
        <ul className="list-disc list-inside pl-2 text-left">
          {(v as string[]).map((c) => (
            <li>{c}</li>
          ))}
        </ul>
      );
    case "intake": {
      const intakes = v as { description: string; year: string }[];
      return (
        <ul className="list-disc list-inside pl-2 text-left">
          {intakes.map((i) => (
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
      );
    }
    case "fee": {
      // use special render technique for fee in comparison ba haiz
      const fees = (v as string).split(", "); // in data all is malaysianFee(, )foreigner fee
      return (
        <ul className="list-disc list-inside pl-2 text-left">
          {fees.map((f) => (
            <li>{f}</li>
          ))}
        </ul>
      );
    }
    default:
      // @ts-expect-error v is of type unknown
      return <div>{v.toString()}</div>;
  }
}

// takes in array of objects (has to be of the same type), populates the key of the objects (taken from object 1, so if object 2/3/4 has a key not in object 1, it is ignored) into a grid of comparison, manages its own state (which features are shown, which are not)
export default function CompareGrid({
  objects,
}: {
  objects: { [k: string]: unknown }[];
}) {
  // compareFeatures are all the features in object 1, 2/3/4 respectively, compareObjects are populated in the form such that {[k: features]: valueFromObjects[]}
  const [compareFeatures, compareObject]: [
    string[],
    { [k: string]: unknown[] },
  ] = useMemo(() => {
    const compareFeatures = Object.keys(Object.assign({}, ...objects));
    const compareObject: { [k: string]: unknown[] } = {};
    compareFeatures.forEach((f) => {
      compareObject[f] = [objects.map((el) => el[f] ?? null)];
    });
    return [compareFeatures, compareObject];
  }, [objects]);

  const [hiddenFeatures, setHiddenFeatures] = useState(["title"]); // always hide title as display on top d

  const filterFunc = useCallback(
    (f: string) => !hiddenFeatures.includes(f),
    [hiddenFeatures]
  );

  return (
    <div
      className={`grid gap-x-4 gap-y-1`}
      style={{
        gridTemplateColumns: `25ch repeat(${objects.length}, minmax(150px, 3fr))`,
      }}
    >
      {/* Header Row */}
      <div />
      {objects.map((v, idx) => (
        <div
          key={`header-${idx}`}
          className="font-bold text-lg text-center p-2"
        >
          {/* All programmes will have title, and this grid only used to compare programmes */}
          {v.title as string}
        </div>
      ))}

      {/* Data Rows */}
      {compareFeatures.filter(filterFunc).map((feature) => (
        <>
          {/* Feature Name */}
          <div
            key={`feature-${feature}`}
            className="font-medium p-2 bg-gray-100"
          >
            {camelToTitleCase(feature)}
          </div>
          {/* Feature Values for each object */}
          {compareObject[feature].map((value) =>
            (value as unknown[]).map((v, idx) => (
              <div key={`value-${feature}-${idx}`} className="p-2 text-center">
                {v ? <FeatureRender featureName={feature} v={v} /> : "-"}
              </div>
            ))
          )}
        </>
      ))}
    </div>
  );
}
