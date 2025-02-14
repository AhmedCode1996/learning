import { createFileRoute } from "@tanstack/react-router";

const About = () => <div className="p-2 text-3xl">Hello from About!</div>;

export const Route = createFileRoute("/about")({
  component: About,
});
