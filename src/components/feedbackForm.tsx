import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";

function EmojiPicker({ onSelect }: { onSelect?: (v: number) => void }) {
  const itemClasses = "flex justify-center items-center";
  const radioClass = "hidden";
  const emojiClass = "text-4xl cursor-pointer transition-all";

  const feedbackLevel = ["🤬", "🙁", "😶", "😁", "😍"];

  const [feedback, setFeedback] = useState(-1);

  return (
    <div className="flex gap-4 justify-between">
      {feedbackLevel.map((el, i) => (
        <div className={itemClasses} key={i}>
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
  onClose,
}: {
  prompt: string;
  onSubmit?: () => void;
  onClose?: () => void;
}) {
  const [feedbackScore, setFeedbackScore] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="bg-primaryBg/30 p-4 rounded-lg backdrop-blur-md relative overflow-hidden">
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 bottom-0 left-0 right-0 bg-primaryBg z-[10] flex flex-col items-center justify-center"
        >
          <p className="text-xl font-bold">Thank You!</p>
          <p>We have received your feedback</p>
        </motion.div>
      )}
      <div className="flex justify-end">
        <button onClick={() => onClose?.()}>✕</button>
      </div>
      <p className="mb-2">{prompt}</p>
      <EmojiPicker onSelect={(s) => setFeedbackScore(s)} />
      <div
        className={clsx(
          "grid overflow-hidden transition-all",
          feedbackScore !== -1 && !submitted
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
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
            onClick={() => {
              setSubmitted(true);
              setTimeout(() => onSubmit?.(), 3000);
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
