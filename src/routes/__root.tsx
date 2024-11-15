import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="absolute top-0 text-text flex flex-row items-center p-4 px-8 w-full gap-8 text-lg">
        <div className="grow" />
        <Link to="/cortex">Cortex</Link>
        <Link to="/nix">Nix Guide</Link>
        <Link to="/resume">Resume</Link>
        <a href="https://github.com/AlecMMiller" target="_blank">
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </a>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
