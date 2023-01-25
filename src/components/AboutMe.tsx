import React, { useState } from 'react';
import me from '../assets/images/ja.png';
import ModelViewer from '../Experience/ModelViewer';

export const TitleMain = ({ children }: { children: any }) => {
  return <div className="">{children}</div>;
};

type TTechnology = 'react' | 'aws' | 'ts' | 'css' | 'html';
const AboutMe: React.FC = () => {
  const [technology, setTechnology] = useState<null | TTechnology>(null);
  const displayTechnology = (technology: TTechnology) => {
    if (technology === 'react') {
      return (
        <div>
          Reacta poznałem 3 lata temu podczas wybierania frameworka do js'a i od
          tamtej pory ze mną został. Pisząc w nim aplikację stosuję składnię
          ES6, uzywam hooków i potrafie stosowac Context API, useRef, czy
          useMemo :)
        </div>
      );
    } else if (technology === 'aws') {
      return (
        <div>
          Przygotę z awsem zacząłem 2 lata temu, w październiku zdobyłem
          certyfikat<b> AWS Certified Cloud Practiotioner</b>, w 2023 jeszcze
          zrobię certyfikat AWS Solutions Associate... Pomagałem implementowac
          serwisy uzywajac AWS CDK z uzyciem typescripta.
        </div>
      );
    } else if (technology === 'ts') {
      return (
        <div>
          Typescript wszedł w moje aplikacje około rok temu i od tamtego czasu
          cieszę się z jego typowania
        </div>
      );
    } else if (technology === 'css') {
      return (
        <div>
          Potrafię tworzyć szkice UI, designy z użyciem Figmy i implementować UI
          z użyciem css'a i bibliotek (tailwind, styled-components). Potrafie
          implementować motywy.
        </div>
      );
    } else if (technology === 'html') {
      return (
        <div className="">
          HTML... Obcykany... Wolałbym zdobyć aktualnie więcej doświaczenia z
          pisania serwisów backendowych :)
        </div>
      );
    }
  };
  return (
    <div className="text-center shadow-strong m-auto justify-center items-center center md:max-w-screen-lg xl:max-w-xxl w-full bg-navyDark mt-6 font-mono text-md p-8">
      <div className=" text-8xl w-full text-center mb-6 ">
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-sky-600 transition-colors font-bold">
          Przemek's
        </span>{' '}
        web portfolio
      </div>
      <div className="md:max-w-screen-lg m-auto my-8 xl:text-lg float-none">
        {/* <button>mg
          className="float-left w-36 mr-6 mb-6"
          src={me}
          alt="my picture :)"
        /> */}

        <p className="mt-32">
          <strong>Hello!</strong> I am web developer / music enthusiast from
          Szczecin, Poland. Welcome to my portfolio!
        </p>
        <p className="my-4">
          Currently I’m studying Computer Science in Poznan, first degree at{' '}
          <a className="text-blue-400" href="https://cdv.pl/en/">
            CDV
          </a>
          , working in{' '}
          <a className="text-blue-400" href="https://www.siili.com/">
            SIILI
          </a>{' '}
          and I’m developing my third personal app, in <strong>React</strong>,
          <strong>TS</strong> and <strong>AWS Cloud</strong>. Hopefully i’ll
          finish it during 2023 and put it here for public use :)
        </p>
      </div>
      <div className="flex justify-between align-middle bg-white/25 px-8 rounded-lg py-1 my-16">
        <button
          onClick={() => setTechnology('react')}
          className="devicon-react-original-wordmark colored my-auto text-6xl focus:bg-white/10 focus:shadow-lg hover:bg-white/10 hover:shadow-lg transition-all p-2 rounded-lg"
        ></button>
        <button
          onClick={() => setTechnology('ts')}
          className="devicon-typescript-plain colored my-auto text-6xl focus:bg-white/10 focus:shadow-lg hover:bg-white/10 hover:shadow-lg transition-all p-2 rounded-lg"
        ></button>

        <button
          onClick={() => setTechnology('aws')}
          className="devicon-amazonwebservices-original colored my-auto text-6xl focus:bg-white/10 focus:shadow-lg hover:bg-white/10 hover:shadow-lg transition-all p-2 rounded-lg"
        ></button>

        <button
          onClick={() => setTechnology('css')}
          className="devicon-css3-plain colored my-auto text-6xl focus:bg-white/10 focus:shadow-lg hover:bg-white/10 hover:shadow-lg transition-all p-2 rounded-lg"
        ></button>
        <button
          onClick={() => setTechnology('html')}
          className="devicon-html5-plain colored my-auto text-6xl focus:bg-white/10 focus:shadow-lg hover:bg-white/10 hover:shadow-lg transition-all p-2 rounded-lg"
        ></button>
      </div>
      {technology ? displayTechnology(technology) : <div></div>}
      {/* <ModelViewer
        scale={40}
        modelPath={'../Experience/Model1/adamHead.gltf'}
      /> */}
    </div>
  );
};

export default AboutMe;
