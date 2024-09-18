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

export default function ChatBot({ onClose }: { onClose?: () => void }) {
  const [aiMessage, setAiMessage] = useState<(HumanMessage | AiMessage)[]>([]);
  const [agentMessage, setAgentMessage] = useState<HumanMessage[]>([]);
  const [messageId, setMessageId] = useState(0);
  const [messageType, setMessageType] = useState<"AI" | "HUMAN">("AI");
  const [currentMessage, setCurrentMessage] = useState("");

  const chatMessageBox = useRef(null);

  const userSendMessage = useCallback(() => {
    if (messageType === "AI") {
      let interactive = {};
      if (
        currentMessage.toLowerCase().includes("sched") ||
        currentMessage.toLowerCase().includes("book")
      ) {
        interactive = { interactive: SchedulerInteractive };
      }
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
          by: "RESPONDER",
          content: "As you wish",
          time: new Date().toLocaleTimeString(),
          ...interactive,
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
