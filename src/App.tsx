import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="latte dark:mocha bg-base h-dvh min-h-0 max-h-dvh flex flex-col items-center gap-4">
      <div className="text-text flex flex-row items-center p-4 px-8 w-full gap-8 text-lg">
        <div className="grow" />
        <span>Cortex</span>
        <span>Nix Guide</span>
        <span>Resume</span>
        <a href="https://github.com/AlecMMiller" target="_blank">
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </a>
      </div>
      <h1 className="text-9xl text-peach mt-14 font-zilla font-medium">
        <span className="text-pink">D</span>
        <span className="text-mauve">E</span>
        <span className="text-red">N</span>
        <span className="text-peach">M</span>
        <span className="text-yellow">A</span>
        <span className="text-green">C</span>
        <span className="text-teal">H</span>
        <span className="text-blue">I</span>
      </h1>
      <h2 className="text-4xl text-text font-spectral">nix and other interesting stuff</h2>
      <h1 className="text-[35vh] text-rosewater opacity-5 ">電町</h1>
      <h3 className="absolute bottom-4 right-6 text-2xl opacity-50 text-lavender">Alec Miller</h3>
    </div>
  );
}

export default App;
