import { createFileRoute } from "@tanstack/react-router";

const IndexRoute = () => (
  <div className="p-2 text-3xl font-bold text-blue-500">Hello from Home!</div>
);

export const Route = createFileRoute("/")({
  component: IndexRoute,
});
