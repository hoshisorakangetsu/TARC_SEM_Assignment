import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/header";
import Footer from "@/components/footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* vite MODE can be 'development' | 'production' | 'staging', only show dev tools under development mode */}
      {import.meta.env.MODE === "development" && <TanStackRouterDevtools />}
    </>
  ),
});
