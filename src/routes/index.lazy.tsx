import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="h-dvh min-h-0 max-h-dvh flex flex-col items-center gap-4">
      <h1 className="text-9xl text-peach mt-28 font-zilla font-medium">
        <span className="text-pink">D</span>
        <span className="text-mauve">E</span>
        <span className="text-red">N</span>
        <span className="text-peach">M</span>
        <span className="text-yellow">A</span>
        <span className="text-green">C</span>
        <span className="text-teal">H</span>
        <span className="text-blue">I</span>
      </h1>
      <h2 className="text-4xl text-text font-spectral">
        nix and other interesting stuff
      </h2>
      <h1 className="text-[35vh] text-rosewater opacity-5 ">電町</h1>
      <h3 className="absolute bottom-4 right-6 text-2xl opacity-50 text-lavender">
        Alec Miller
      </h3>
    </div>
  );
}
