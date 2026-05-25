import { useState, useEffect } from "react";
import Background from "./components/background/background";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";

export const App = () => {
  let heroData = [
    {text1:"Dive Into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your desires"},
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((prevCount) => {return prevCount === 2 ? 0 : prevCount + 1});
    }, 3000);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus}
        setHeroCount={setHeroCount}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        playStatus={playStatus}
      />
    </div>
  )
}
export default App
