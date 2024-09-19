import { ReactNode } from "@tanstack/react-router";
import clsx from "clsx";
import { useCallback, useRef, useState } from "react";

type MessageBy = "SENDER" | "RESPONDER";

interface HumanMessage {
  id: number;
  by: MessageBy;
  content: string;
  time: string;
}

type AiMessage = HumanMessage & {
  interactive?: ReactNode;
  interactiveState?: object;
};

function SenderBox({ content, time }: HumanMessage) {
  return (
    <div className="flex flex-col">
      <p className="ml-auto mr-1">You • {time}</p>
      <div className="flex gap-2 max-w-[90%] w-fit ml-auto p-2 bg-primaryBg/70 rounded-md">
        <div className="grow">{content}</div>
      </div>
    </div>
  );
}

function ResponderBox({ content, time, ...props }: HumanMessage | AiMessage) {
  return (
    <div className="flex flex-col">
      <p className="ml-1 mr-auto">Responder • {time}</p>
      <div className="flex gap-2 max-w-[90%] w-fit mr-auto p-2 bg-black/10 rounded-md">
        <div className="grow">{content}</div>
      </div>
      <div className="flex">
        {(props as AiMessage).interactive?.(
          (props as AiMessage)?.interactiveState ?? {}
        )}
      </div>
    </div>
  );
}

function SchedulerInteractive() {
  const [selected, setSelected] = useState(-1);
  return (
    <div className="flex flex-col p-2 bg-black/10 w-full mt-1 rounded-md">
      <p>Please select your desired timeslot</p>
      <div className="w-full flex gap-2">
        {["11-1pm", "1-3pm", "3-5pm"].map((el, i) => {
          return (
            <button
              className={clsx(
                "grow py-1 rounded-md",
                (selected ?? -1) === i ? "bg-primaryBg" : "bg-primaryBg/20"
              )}
              key={i}
              onClick={() => {
                setSelected(i);
              }}
            >
              {el}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface ScholarshipData {
  title: string;
  description: string;
  requirement: string[];
  link: string;
}

const ScholarshipCard = ({
  title,
  description,
  requirement,
  link,
}: ScholarshipData) => (
  <div className="mt-2 p-2 rounded-md bg-white flex flex-col gap-2">
    <h1 className="font-bold text-lg">{title}</h1>
    <p>{description}</p>
    <p>Requirements</p>
    <ul className="list-disc list-inside">
      {requirement.map((r) => (
        <li>{r}</li>
      ))}
    </ul>
    <button
      className="py-1 bg-primaryBg rounded-md"
      onClick={() => window.open(link, "_blank")}
    >
      MORE DETAILS
    </button>
  </div>
);

const scholarships: ScholarshipData[] = [
  {
    title: "Hello",
    description: "Test Scholarship",
    requirement: ["10000 A"],
    link: "https://focs.tarc.edu.my",
  },
  {
    title: "Hello",
    description:
      "Test Scholarship with very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long description",
    requirement: ["10000 A"],
    link: "https://focs.tarc.edu.my",
  },
];

function ScholarshipInteractive() {
  const [selected, setSelected] = useState(-1);
  return (
    <div className="flex flex-col p-2 bg-black/10 w-full mt-1 rounded-md">
      <p>Please select your desired scholarship</p>
      <div className="w-full flex gap-2">
        {scholarships.map((_el, i) => {
          return (
            <button
              className={clsx(
                "grow py-1 rounded-md",
                (selected ?? -1) === i ? "bg-primaryBg" : "bg-primaryBg/20"
              )}
              key={i}
              onClick={() => {
                setSelected(i);
              }}
            >
              {i}
            </button>
          );
        })}
      </div>
      <div
        className={clsx(
          "grid overflow-hidden",
          selected > -1 && selected < scholarships.length
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          {selected > -1 && selected < scholarships.length ? (
            <ScholarshipCard {...scholarships[selected]} />
          ) : (
            <span>Unknown</span>
          )}
        </div>
      </div>
    </div>
  );
}

const aiResponseDict: { [k: string]: Omit<AiMessage, "id"> } = {
  book: {
    by: "RESPONDER",
    content: "As you wish",
    time: new Date().toLocaleTimeString(),
    interactive: SchedulerInteractive,
  },
  sched: {
    by: "RESPONDER",
    content: "As you wish",
    time: new Date().toLocaleTimeString(),
    interactive: SchedulerInteractive,
  },
  scholarship: {
    by: "RESPONDER",
    content: "As you wish",
    time: new Date().toLocaleTimeString(),
    interactive: ScholarshipInteractive,
  },
  money: {
    by: "RESPONDER",
    content: "As you wish",
    time: new Date().toLocaleTimeString(),
    interactive: ScholarshipInteractive,
  },
};

const getAiResponse = (s: string): Omit<AiMessage, "id"> => {
  for (const k in aiResponseDict) {
    if (s.includes(k)) {
      return aiResponseDict[k as keyof typeof aiResponseDict];
    }
  }
  return {
    by: "RESPONDER",
    content: "Sorry, I am currently unable to help with that",
    time: new Date().toLocaleTimeString(),
  };
};

export default function ChatBot({ onClose }: { onClose?: () => void }) {
  const [aiMessage, setAiMessage] = useState<(HumanMessage | AiMessage)[]>([]);
  const [agentMessage, setAgentMessage] = useState<HumanMessage[]>([]);
  const [messageId, setMessageId] = useState(0);
  const [messageType, setMessageType] = useState<"AI" | "HUMAN">("AI");
  const [currentMessage, setCurrentMessage] = useState("");

  const chatMessageBox = useRef(null);

  const userSendMessage = useCallback(() => {
    if (messageType === "AI") {
      const aiResponse = getAiResponse(currentMessage);
      setAiMessage([
        ...aiMessage,
        {
          id: messageId,
          by: "SENDER",
          content: currentMessage,
          time: new Date().toLocaleTimeString(),
        },
        {
          id: messageId + 1,
          ...aiResponse,
        },
      ]);
      setMessageId(messageId + 2);
    } else {
      setAgentMessage([
        ...agentMessage,
        {
          id: messageId,
          by: "SENDER",
          content: currentMessage,
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setMessageId(messageId + 1);
    }
    setCurrentMessage("");
    (
      chatMessageBox.current as unknown as HTMLDivElement
    ).lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [messageType, currentMessage, aiMessage, agentMessage, messageId]);

  return (
    <div className="bg-primaryBg/30 p-4 rounded-lg backdrop-blur-md relative overflow-hidden">
      <div className="flex justify-between">
        <select
          className="p-2 rounded-md outline-none"
          onChange={(e) =>
            setMessageType(e.currentTarget.value as "AI" | "HUMAN")
          }
          value={messageType}
        >
          <option value="AI">AI</option>
          <option value="HUMAN">Agent (Human)</option>
        </select>
        <button onClick={() => onClose?.()}>✕</button>
      </div>
      <div className="h-96 bg-white rounded-md mt-2 relative grid grid-rows-[9fr,1fr] p-2">
        {/* #region messages */}
        <div className="max-h-80 overflow-auto flex flex-col gap-2">
          {messageType === "AI"
            ? aiMessage.map((v) =>
                v.by === "SENDER" ? (
                  <SenderBox {...v} key={v.id} />
                ) : (
                  <ResponderBox {...v} key={v.id} />
                )
              )
            : agentMessage.map((v) =>
                v.by === "SENDER" ? (
                  <SenderBox {...v} key={v.id} />
                ) : (
                  <ResponderBox {...v} key={v.id} />
                )
              )}
          {/* dummy div to scroll to */}
          <div ref={chatMessageBox}></div>
        </div>
        {/* #endregion */}
        <div className="flex gap-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your message"
            className="p-2 grow outline-none border border-black focus:border-primaryBg rounded-md"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.currentTarget.value)}
          />
          <button
            className="bg-primaryBg px-4 rounded-md"
            onClick={userSendMessage}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
