import { Navbar } from "@/components/Shared/Navbar";
import { DriveToday } from "./components/DriveToday";
import { Features } from "./components/Features";
import { FirstBlock } from "./components/FirstBlock";
import { OurFleet } from "./components/OurFleet";
import { SliderBrands } from "./components/SliderBrands";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FirstBlock />
      <SliderBrands />
      <Features />
      <OurFleet />
      <DriveToday />
    </div>
  );
};

export default Home;
