import { Fragment, useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./modal";

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
  // only if type is image will use tiok this
  const [viewEnlarged, setViewEnlarged] = useState(false);
  switch (featureName) {
    case "overview":
      return <p className="text-justify">
        {v as string}
      </p>
    case "campus":
      return (
        <ul className="list-disc list-inside pl-2 text-left">
          {(v as string[]).map((c) => (
            <li key={c}>{c}</li>
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
            onClick={() => setViewEnlarged(true)}
          />
          {createPortal(
        <Modal
          isOpen={viewEnlarged}
          onClose={() => setViewEnlarged(false)}
          title="Show Features"
          className="p-4 pt-0 flex flex-wrap gap-2 overflow-auto"
        >
          <img
            src={v as string}
            alt="Entry Requirement"
            className="w-full h-auto"
            onClick={() => setViewEnlarged(true)}
          />
        </Modal>,
        document.body
      )}
        </div>
      );
    case "outline":
      return (
        <ul className="list-disc list-inside pl-2 text-left">
          {(v as string[]).map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      );
    case "progression":
      return (
        <ul className="list-disc list-inside pl-2 text-left">
          {(v as string[]).map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      );
    case "career":
      return (
        <ul className="list-disc list-inside pl-2 text-left">
          {(v as string[]).map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      );
    case "intake": {
      const intakes = v as { description: string; year: string }[];
      return (
        <ul className="list-disc list-inside pl-2 text-left">
          {intakes.map((i) => (
            <li className="[&>*]:align-text-top" key={i.year}>
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
            <li key={f}>{f}</li>
          ))}
        </ul>
      );
    }
    default:
      return <div>{v ? v.toString() : "-"}</div>;
  }
}

function AddFeatureButton({
  feature,
  onClick,
}: {
  feature: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1 bg-primaryBg rounded-md flex items-center gap-2"
    >
      <span>+</span>
      <span>{feature}</span>
    </button>
  );
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
  const [modalOpen, setModalOpen] = useState(false);

  const filterFunc = useCallback(
    (f: string) => !hiddenFeatures.includes(f),
    [hiddenFeatures]
  );

  const hideFeature = useCallback(
    (f: string) => {
      if (confirm(`Hide feature ${camelToTitleCase(f)}?`))
        setHiddenFeatures([...hiddenFeatures, f]);
    },
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
      <div className="flex justify-center items-center h-full">
        {hiddenFeatures.length > 1 && (
          <button
            className="px-2 py-1 h-fit bg-primaryBg rounded-md"
            onClick={() => setModalOpen(true)}
          >
            Show Hidden Features
          </button>
        )}
      </div>
      {objects.map((v, idx) => (
        <div
          key={`header-${idx}`}
          className="font-bold text-lg text-center p-2"
        >
          {/* All programmes will have title, and this grid only used to compare programmes */}
          {v?.title ? (v?.title as string) : "-"}
        </div>
      ))}

      {/* Data Rows */}
      {compareFeatures.filter(filterFunc).map((feature) => (
        <Fragment key={feature}>
          {/* Feature Name */}
          <div
            key={`feature-${feature}`}
            className="font-medium p-2 bg-gray-100"
          >
            <div className="flex items-center gap-4">
              <button
                className="text-xl text-red-500"
                onClick={() => hideFeature(feature)}
                title="Hide Feature"
              >
                ✕
              </button>
              <span>{camelToTitleCase(feature)}</span>
            </div>
          </div>
          {/* Feature Values for each object */}
          {compareObject[feature].map((value) =>
            (value as unknown[]).map((v, idx) => (
              <div key={`value-${feature}-${idx}`} className="p-2 text-center">
                {v ? (
                  <FeatureRender featureName={feature} v={v} />
                ) : (
                  <span className="text-xl">N/A</span>
                )}
              </div>
            ))
          )}
        </Fragment>
      ))}
      {createPortal(
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Show Features"
          className="p-4 pt-0 flex flex-wrap gap-2"
        >
          {/* DO NOT SHOW TITLE AT ALL COSTS */}
          {hiddenFeatures
            .filter((f) => f !== "title")
            .map((f) => (
              <AddFeatureButton
                key={f}
                feature={camelToTitleCase(f)}
                onClick={() => {
                  setHiddenFeatures(hiddenFeatures.filter((hf) => hf !== f));
                  // hidden feature is still the original hidden feature array before rerender, so need check with -1
                  if (hiddenFeatures.length - 1 <= 1) setModalOpen(false);
                }}
              />
            ))}
        </Modal>,
        document.body
      )}
    </div>
  );
}
