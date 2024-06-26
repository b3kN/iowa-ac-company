"use client";

import MainHero from "./components/mainHero";
import PictureHero from "./components/pictureHero";
import ServicesGrid from "./components/servicesGrid";
import WithSpeechBubbles from "./components/testimonials";

export default function Home() {
  return (
    <>
      <MainHero />
      <WithSpeechBubbles />
      <ServicesGrid />
      <PictureHero />
    </>
  );
}
