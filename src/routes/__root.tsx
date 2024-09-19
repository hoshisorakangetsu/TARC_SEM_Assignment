import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/header";
import Footer from "@/components/footer";
import FeedbackForm from "@/components/feedbackForm";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatBot from "@/components/chatBot";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const [feedbackShown, setFeedbackShown] = useState(false);
  const [chatBotActivated, setChatBotActivated] = useState(true);

  useEffect(() => {
    setTimeout(() => setFeedbackShown(true), 5000);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-dvh">
        <Outlet />
      </main>
      <Footer />
      <div className="fixed z-[999] right-8 bottom-8 flex flex-col gap-4 max-w-md min-w-[28rem]">
        <AnimatePresence>
          {chatBotActivated ? (
            <motion.div
              key="chatbot"
              style={{ originY: 1, originX: 1 }}
              initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
              animate={{
                scaleX: 1,
                scaleY: 1,
                opacity: 1,
              }}
              exit={{ scaleX: 0, scaleY: 0, opacity: 0 }}
            >
              <ChatBot onClose={() => setChatBotActivated(false)} />
            </motion.div>
          ) : (
            <motion.button
              key="chatbotBtn"
              style={{ originY: 1, originX: 1 }}
              initial={{
                scaleX: 0,
                scaleY: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                scaleY: 1,
                opacity: 1,
              }}
              onClick={() => setChatBotActivated(true)}
              className="bg-primaryBg w-fit self-end px-4 py-2 rounded-md shadow-md hover:shadow-lg active:shadow-md"
            >
              Get Help
            </motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {feedbackShown && (
            <motion.div
              key="feedbackForm"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
            >
              <FeedbackForm
                prompt="How was your experience so far?"
                onClose={() => setFeedbackShown(false)}
                onSubmit={() => setFeedbackShown(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* vite MODE can be 'development' | 'production' | 'staging', only show dev tools under development mode */}
      {import.meta.env.MODE === "development" && <TanStackRouterDevtools />}
    </>
  );
}
