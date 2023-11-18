// "use client";

import Accordian from "@/components/section/Accordian";
import Comapanies from "@/components/section/Comapanies";
import Commitments from "@/components/section/Commitments";
import Cta from "@/components/section/Cta";
import Cta2 from "@/components/section/Cta2";
import Footer from "@/components/section/Footer";
import Landing from "@/components/section/Landing";
import Navbar from "@/components/section/Navbar";
import Strategy from "@/components/section/Strategy";
import Team from "@/components/section/Team";
import Testomonials from "@/components/section/Testomonials";
import Works from "@/components/section/Works";
import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { useTheme } from "next-themes";

export default function Home() {
  // const [mode, setMode] = useState(true);
  // const {setTheme}  = useTheme();

  // const handleMode = (theme : string) =>{
  //   setMode(!mode)
  //   setTheme(theme)
  // }

  return (
    <main>
      <Navbar/>
      <Landing/>
      <Comapanies/>
      <Commitments/>
      <Strategy/>
      <Works/>
      <Cta/>
      <Team/>
      <Testomonials/>
      <Cta2/>
      <Accordian/>
      <Footer/>
    </main>
  );
}
