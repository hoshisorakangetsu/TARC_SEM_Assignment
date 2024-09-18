import clsx from "clsx";
import { useState } from "react";

function EmojiPicker({ onSelect }: { onSelect?: (v: number) => void }) {
  const itemClasses = "flex justify-center items-center";
  const radioClass = "hidden";
  const emojiClass = "text-4xl cursor-pointer transition-all";

  const feedbackLevel = ["🤬", "🙁", "😶", "😁", "😍"];

  const [feedback, setFeedback] = useState(-1);

  return (
    <div className="flex gap-4">
      {feedbackLevel.map((el, i) => (
        <div className={itemClasses}>
          <label htmlFor={i.toString()}>
            <input
              className={radioClass}
              type="radio"
              name="feedback"
              id={i.toString()}
              value={i}
              onClick={() => {
                onSelect?.(i);
                setFeedback(i);
              }}
            />
            <span
              className={clsx(
                emojiClass,
                feedback === i ? "block scale-[1.2]" : "grayscale"
              )}
            >
              {el}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default function FeedbackForm({
  prompt,
  onSubmit,
}: {
  prompt: string;
  onSubmit?: () => void;
}) {
  const [feedbackScore, setFeedbackScore] = useState(-1);
  return (
    <div className="bg-primaryBg/20 p-4 rounded-lg backdrop-blur-md">
      <p className="mb-2">{prompt}</p>
      <EmojiPicker onSelect={(s) => setFeedbackScore(s)} />
      {feedbackScore !== -1 && (
        <>
          <div className="mt-4">
            <p className="mb-2">
              {feedbackScore + 1 < 4
                ? "How can we improve?"
                : "What do you like about us?"}
            </p>
            <textarea
              name="feedback"
              id="feedback"
              rows={5}
              style={{ resize: "none" }}
              placeholder="Type your message here"
              className="w-full rounded-md p-2 outline-none border border-transparent transition-all focus:border-primaryBg"
            ></textarea>
          </div>
          <button
            className="w-full py-2 bg-primaryBg rounded-md mt-2"
            onClick={() => onSubmit?.()}
          >
            SUBMIT
          </button>
        </>
      )}
    </div>
  );
}
