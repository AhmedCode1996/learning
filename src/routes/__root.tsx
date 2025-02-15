import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-8 justify-center items-center">
        <Link
          to="/"
          className="text-blue-500 text-3xl font-bold hover:bg-amber-600"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-blue-500 text-3xl font-bold hover:text-4xl animate-pulse"
        >
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
