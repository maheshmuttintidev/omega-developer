import { YouTubeEmbed } from "react-social-media-embed";
import SubImage from "./assets/omega_developer_1.webp";

function App() {
  return (
    <>
      <section className="h-screen bg-[url('./assets/omega_developer_2.jpg')] bg-cover bg-center w-full p-3">
        <h1 className="text-6xl font-bold text-center w-full text-yellow-400 drop-shadow-2xl">
          Omega Developer
        </h1>
        <div className="flex gap-4 flex-wrap mt-5">
          <div className="flex flex-grow-1 flex-col gap-3 items-center justify-center mx-auto">
            <YouTubeEmbed
              url="https://www.youtube.com/shorts/sGB59cegKYI"
              className="h-max"
            />

            <YouTubeEmbed
              url="https://www.youtube.com/shorts/VuoFjvc3rOg"
              className="h-max"
            />
          </div>
          <div className="mx-auto flex-grow gap-3 pt-3 flex flex-col items-center bg-emerald-300 rounded-md border border-4 inset-5 border-emerald-500">
            <h2 className="text-5xl text-center font-bold text-black drop-shadow-lg">
              Youtube Content
            </h2>
            <p className="text-2xl text-center font-semibold text-violet-950">
              {" "}
              Omega Bro is waiting for a blast of one punch with AI bro{" "}
            </p>
            <img src={SubImage} alt="Omega Bro" className="" />
            <a href="https://www.youtube.com/channel/UC_4y9u6Id5aU2g-_vUMA5Vg" target="_blank" className="border border-4 border-red-600 rounded-sm p-3 hover:bg-red-100 text-2xl text-center font-semibold text-red-600 drop-shadow-lg">
              Subscribe and Share Guys{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
