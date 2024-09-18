import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/header";
import Footer from "@/components/footer";
import FeedbackForm from "@/components/feedbackForm";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main className="min-h-dvh">
        <Outlet />
      </main>
      <Footer />
      <div className="fixed z-[999] right-8 bottom-8">
        <FeedbackForm prompt="How is your experience so far?" />
      </div>
      {/* vite MODE can be 'development' | 'production' | 'staging', only show dev tools under development mode */}
      {import.meta.env.MODE === "development" && <TanStackRouterDevtools />}
    </>
  ),
});
