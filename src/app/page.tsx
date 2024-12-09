import Image from "next/image";
import Header from "./components/Header";
import Ceramics from "./components/Ceramics";
import Brand from "./components/Brand";
import Benefit from "./components/Benefit";
import Hero from "./components/HeroSection";
import Product from "./components/Product";
import Touch from "./components/Touch";

export default function Home() {
  return (
   <div>
    {/* <Header/> */}
    <Hero/>
    <Brand/>
    <Ceramics/>
    <Product/>
    <Benefit/>
    <Touch/>
  
   </div>
  );
}
