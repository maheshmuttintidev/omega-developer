import Image from "next/image";
import Banner from "./banner.png";

export default function Home() {
  return (
    <main className="container mx-auto p-3">
      <h1 className="h1">
        <BigLetter letter="O" />
        mega <BigLetter letter="D" />
        eveloper <u>aka</u> <BigLetter letter="F" />
        ull <BigLetter letter="S" />
        tack <BigLetter letter="W" />
        eb <BigLetter letter="D" />
        eveloper
      </h1>
      <ul className="flex gap-x-10 gap-y-3 flex-wrap">
        <li className="list-disc">Anime</li>
        <li className="list-disc">React</li>
        <li className="list-disc">React Native</li>
        <li className="list-disc">Node Js</li>
        <li className="list-disc">Mongo DB</li>
        <li className="list-disc">Postgresql</li>
      </ul>
      <Image
        src={Banner}
        className="object-contain"
        alt="Omega Developer Banner Image"
      />
    </main>
  );
}

const BigLetter = ({ letter }: { letter: string }) => {
  return <span className="big-text">{letter}</span>;
};